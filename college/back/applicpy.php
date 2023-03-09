<?php
session_start();



      include "../../confi/sqlcon.php";
      include "../../confi/phpcon.php";
      if($_SESSION['admlog']=="active")
      {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $st=$conn->prepare("select name  from cpny");

    $sig=$st->execute();
    
    $res=$st->get_result();
     //var_dump($res->fetch_all());
    $tab="<div class=\"btn-group-vertical\">";
     $row=$res->fetch_assoc();
      foreach($res as $v => $i)
         {
             $tab.="<button class=\"btn btn-default\" type=\"button\"  onclick=\"applishow('".$i['name']."');\">".$i['name']."</button>";
         } 
         $tab.="</div>";
         echo $tab;
    
    
    
    $st->close();
  }
  else
    {
      session_destroy();
      
      header("Location:".$url."/placement/college/index.php");
      
      
    }
    ?>
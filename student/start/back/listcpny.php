<?php

session_start();
include "../../../confi/sqlcon.php";
include "../../../confi/phpcon.php";

if($_SESSION['studlog']=="active")
{
  $roll=$_SESSION['roll'];






    
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
             $tab.="<button type=\"button\" onclick=\"discpny('".$i['name']."')\" class=\"btn btn-primary small\">".$i['name']."</button>";
         } 
         $tab.="</div>";
         echo $tab;
    
    
    
    $st->close();

  }
  else
    {
  
      session_destroy();
       
      header("Location: ".$url."/placement/student/index.php");
      
    }
    ?>
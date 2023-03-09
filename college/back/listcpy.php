<?php
session_start();
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
/*if(isset($_GET["sjson"])){

    $DE=json_decode($_GET["sjson"]);}
    
  */  
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $st=$conn->prepare("select name,descr,date,12th,10th,sem,eligible,ary from cpny");

    $sig=$st->execute();
    
    $res=$st->get_result();
     //var_dump($res->fetch_all());
    $tab="<table class=\"tab\"><tr><th colspan=\"9\" align=\"center\"><center>List of Companies</center></th></tr><tr><th>Company</th><th>Description</th><th>12th</th><th>10th</th><th>Sem</th><th>Eligible</th><th>Arrear Allowed</th></tr>";
     $row=$res->fetch_assoc();
      foreach($res as $v => $i)
         {
             $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['name']."</td><td class=\"row\">".$i['descr']."</td><td class=\"row\">".$i['12th']."</td><td class=\"row\">".$i['10th']."</td><td class=\"row\">".$i['sem']."</td><td  class=\"row\">".$i['eligible']."</td><td class=\"row\">".$i['ary']."</td><td class=\"row\"><input class=\"btn btn-danger\" type=\"button\" value=\"Delete\" onclick=\"delcpy('".$i['name']."');\"></td></tr>";
         } 
         $tab.="</table><br><br>";
         echo $tab;
    
    
    
    $st->close();
  }
  else
  {
    session_destroy();
    
    header("Location:".$url."/placement/college/index.php");
    
    
  }

?>
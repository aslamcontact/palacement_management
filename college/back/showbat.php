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
    $st=$conn->prepare("select distinct batch,dept,class,sec from student;");

    $sig=$st->execute();
    
    $res=$st->get_result();
     //var_dump($res->fetch_all());
    $tab="<br><table class=\"tab\"><tr><th>Batch</th><th>Department</th><th>class</th><th>Section</th></tr>";
     $row=$res->fetch_assoc();
      foreach($res as $v => $i)
         {
             $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['batch']."</td><td class=\"row\">".$i['dept']."</td><td class=\"row\">".$i['class']."</td><td class=\"row\">".$i['sec']."</td></tr>";
         } 
         $tab.="</table>";
         echo $tab;
    
    
    
    $st->close();
  }
  else
  {
    session_destroy();
    
    header("Location:".$url."/placement/college/index.php");
    
    
  }

?>
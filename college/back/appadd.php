<?php
session_start();
/*$servername = "localhost";
$username = "webdata";
$password = "Asm*78654321";
$db="test";*/
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
if(isset($_GET["roll"]))
      {

    $roll=$_GET["roll"];
     }
     if(isset($_GET["cname"]))
      {

    $cname=$_GET["cname"];
     }
    
    
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $st=$conn->prepare("insert into cpnyapp(rollno,cpname) values(?,?);");
    $st->bind_param("ss",$roll,$cname);

    $sig=$st->execute();
    
     if($sig)echo "true";
     else echo "false";
    
     
    
    
    $st->close();
  }
  else
    {
      session_destroy();
      
      header("Location:".$url."/placement/college/index.php");
      
      
    }

?>
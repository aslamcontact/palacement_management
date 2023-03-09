<?php
session_start();
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {


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




$st=$conn->prepare("delete from cpny where name=?");
$st->bind_param("s",$cname);
 $sig=$st->execute();
if($sig)
   {
     echo "Company ".$cname." is Deleted";
   }
else echo "Try again later";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
}
else
{
  session_destroy();
  
  header("Location:".$url."/placement/college/index.php");
  
  
}
?>
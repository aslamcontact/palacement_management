<?php
session_start();
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
if(isset($_GET["upsig"]))
    {

$upsig=$_GET["upsig"];
     }
     if(isset($_GET["roll"]))
    {

$roll=$_GET["roll"];
     }
     if(isset($_GET["batch"]))
    {

$batch=$_GET["batch"];
     }
     if(isset($_GET["cls"]))
    {

$cls=$_GET["cls"];
     }
     if(isset($_GET["sec"]))
    {

$sec=$_GET["sec"];
     }
     if(isset($_GET["subcode"]))
    {

$subcode=$_GET["subcode"];
     }
     if(isset($_GET["dept"]))
     {
 
 $dept=$_GET["dept"];
      }
     
  /*   $upsig="upmark";
     $upbd="aziz abdul";
     $roll="17US9603";
     $field="name";
     $per="12th";
     $npval="50";
     $nmark=60;
     $npass="P";
     $subcode="SUB";*/
     //$te=strcmp($upsig,"updata");

 if(strcmp($upsig,"delcls")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql="delete from student where class=? and sec=? and dept=?;";


$st=$conn->prepare($sql);
$st->bind_param("sss",$cls,$sec,$dept);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>".$cls." ".$sec." ".$dept." Successfully Deleted</font>";
   }
else echo "<font color=red>Please check Entered value</font>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }

  if(strcmp($upsig,"delroll")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql="delete from student where roll=?";


$st=$conn->prepare($sql);
$st->bind_param("s",$roll);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>Successfully roll no: ".$roll."is Deleted</font>";
   }
else echo "<font color=red>Please check the Entered Value</font>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }
  if(strcmp($upsig,"delsub")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql="delete from smdata where rollno=? and subcode=?";


$st=$conn->prepare($sql);
$st->bind_param("ss",$roll,$subcode);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>".$roll." ".$subcode." Successfully   Deleted</font>";
   }
else echo "<font color=red>Please check the Entered Value</font>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }
  if(strcmp($upsig,"delbatch")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql="delete from student where batch=?";


$st=$conn->prepare($sql);
$st->bind_param("s",$batch);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>".$batch." is Successfully Deleted</font>";
   }
else echo "<font color=red>Please check the Entered Value</font>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }
}
else
{
  session_destroy();
  
  header("Location:".$url."/placement/college/index.php");
  
  
}

  
?>

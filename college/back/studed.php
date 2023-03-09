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
     if(isset($_GET["field"]))
    {

$field=$_GET["field"];
     }
     if(isset($_GET["upbd"]))
    {

$upbd=$_GET["upbd"];
     }
     if(isset($_GET["per"]))
    {

$per=$_GET["per"];
     }
     if(isset($_GET["npval"]))
    {

$npval=$_GET["npval"];
     }
     if(isset($_GET["nmark"]))
    {

$nmark=$_GET["nmark"];
     }
     if(isset($_GET["npass"]))
    {

$npass=$_GET["npass"];
     }
     if(isset($_GET["subcode"]))
    {

$subcode=$_GET["subcode"];
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

 if(strcmp($upsig,"updata")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql=" update student set ".$field."=? where roll=?;";


$st=$conn->prepare($sql);
$st->bind_param("ss",$upbd,$roll);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>".$upbd." is Updated Successfully</font><br>";
   }
else echo "<font color=red>Please Check Entered Value</font><br>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }

  if(strcmp($upsig,"upper")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql=" update percentage set ".$per."=? where rollno=?;";


$st=$conn->prepare($sql);
$st->bind_param("ss",$npval,$roll);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>".$per." Percentage Is Successfully Updated</font>";
   }
else echo "<font color=red>Please Check Entered Value</font><br>";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
  }
  if(strcmp($upsig,"upmark")==0)
  {
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$sql="update smdata set mark=?,pass=? where rollno=? and subcode=?";


$st=$conn->prepare($sql);
$st->bind_param("ssss",$nmark,$npass,$roll,$subcode);
 $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "<font color=green>Subject ".$subcode." Is Update Successfully</font>";
   }
else echo "<font color=red>Please Check Entered Value</font><br>";
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
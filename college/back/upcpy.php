<?php
session_start();
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
if(isset($_GET["sjson"]))
     {

$d=json_decode($_GET["sjson"]);
     }



// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$cname=$d->cname;
$des=$d->des;
$eli=$d->eli;
$date=$d->date;
$p10=$d->p10;
$p12=$d->p12;
$psem=$d->psem;
$arear=$d->arear;


$st=$conn->prepare("insert into cpny(name,descr,eligible,date,10th,12th,sem,ary) values(?,?,?,?,?,?,?,?)");
$st->bind_param("ssssdddi",$cname,$des,$eli,$date,$p10,$p12,$psem,$arear);
 $sig=$st->execute();
if($sig)
   {
     echo "Company ".$cname." is Created";
   }
else echo " ".$cname."is Already in Database";
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
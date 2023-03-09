<?php
session_start();

include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
if(isset($_GET["sjson"])){

$DE=json_decode($_GET["sjson"]);}



// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$ROLL=strtoupper($DE->ROLLNO);

$per10=$DE->Per10th;
$per12=$DE->Per12th;
$persem=$DE->PerSem;


$st=$conn->prepare("insert into percentage(rollno,10th,12th,sem) values(?,?,?,?)");
$st->bind_param("sddd",$ROLL,$per10,$per12,$persem);
 $sig=$st->execute();
if($sig)
   {
     echo "true";
   }
else echo "data is not inserted";
//$res=$st->get_result();
// var_dump($res->fetch_all());

// $row=$res->fetch_assoc();
//echo $row['date']; 



$st->close();
//$res->close();

//foreach($de as $key => $value) {
  //  echo $key." ".$value."<br>";
//}
 
//echo $de->ROLLNO;




}
else
{
  session_destroy();
  
  header("Location:".$url."/placement/college/index.php");
  
  
}






//echo "aslam";
?>
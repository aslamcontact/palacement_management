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
$p="PHONE";
$ROLL=trim(strtoupper($DE->ROLLNO)," ");
$REG=strtoupper($DE->REGNO);
$NAME=$DE->STUDENTNAME;
$FNAME=$DE->FATHERNAME;
$MNAME=$DE->MOTHERNAME;
$CLASS=strtoupper($DE->CLASS);
$DEPT=strtoupper($DE->DEPARTMENT);
$SEC=strtoupper($DE->SECTION);
$ADD=$DE->ADDRESS;
$DOB=str_replace("-","",$DE->DOB);

$BATCH=$DE->BATCH;
$CONTACT=$DE->$p;
$EMAIL=$DE->EMAIL;

$st=$conn->prepare("insert into student(roll,reg,name,fname,mname,class,dept,sec,address,dob,batch,email,contact) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
$st->bind_param("sssssssssssss",$ROLL,$REG,$NAME,$FNAME,$MNAME,$CLASS,$DEPT,$SEC,$ADD,$DOB,$BATCH,$EMAIL,$CONTACT);
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
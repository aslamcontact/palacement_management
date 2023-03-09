<?php
session_start();

include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
if($_SESSION['admlog']=="active")
 {
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


  if(isset($_GET["data"]))$data=json_decode($_GET["data"]);
  
  if(isset($_GET["sem"]))$sem=$_GET['sem'];

  if(isset($_GET["pmark"]))
    {
      $pmark=$_GET["pmark"];
      $pmark=explode(",",$pmark);

    }

    if(isset($_GET["sjson"]))
    {
          $sjson=json_decode($_GET['sjson']);
    }
//echo $data->ROLLNO;
$i=0;
$st=$conn->prepare("insert into smdata(rollno,subcode,mark,pass,sem) values(?,?,?,?,?)");
$st->bind_param("ssssi",$roll,$sub,$mrk,$pass,$sem);
$roll=strtoupper($data->ROLLNO);
 
foreach($sjson as $key => $value) {
    if($data->$key=="A")$pass="A";
    else if($data->$key>=$pmark[$i])$pass="P";
    else $pass="F";
    $mrk=$data->$key;
    $sub=strtoupper($value);

    $sig=$st->execute();
if($st->affected_rows>0)
   {
     echo "";
   }
else echo "<td> <center> Roll:    ".$roll."   Subject:    ".$sub."<center></td>";

     
  //echo $data->ROLLNO." ".$data->$key." ".$pass." ".$sem." ".$value." ".$pmark[$i]."<br>";
  $i++;
}
// Create connection
/*$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}


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
$st->close();*/
}
else
{
  session_destroy();
  
  header("Location:".$url."/placement/college/index.php");
  
  
}
?>
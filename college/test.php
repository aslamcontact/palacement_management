<?php



$servername = "localhost";
$username = "webdata";
$password = "Asm*78654321";
$db="test";


// Create connection
$conn1= new mysqli($servername, $username, $password, $db);
$conn2 = new mysqli($servername, $username, $password, $db);
$conn3 = new mysqli($servername, $username, $password, $db);
$conn4 = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn1->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$class="ba";
$pass="f";


$st1=$conn1->prepare("select distinct subcode  from student  inner  join smdata on student.roll=smdata.rollno where class=? AND pass=?");
$st1->bind_param("ss",$class,$pass);
 $st1->execute();
 $res=$st1->get_result();
 //var_dump($res->fetch_all());
 foreach($res as $i)
     {    
        echo $i['subcode']."<br>";
     }

     $st2=$conn2->prepare("select distinct roll from student inner join smdata on student.roll=smdata.rollno where class=? AND pass=?");
 $st2->bind_param("ss",$class,$pass);
 $st2->execute();
 $res=$st2->get_result();
 //var_dump($res->fetch_all());


 $st3=$conn3->prepare("select distinct roll,mark,subcode from student inner join smdata on student.roll=smdata.rollno where class=? AND pass=?");
  $st3->bind_param("ss",$class,$pass);
 $st3->execute();
 $res2=$st3->get_result();
 $out="";
 $r=1;
 

  foreach($res as $i)
    {
    
      echo $i['roll'];
          foreach($res2 as $j)
             {
                  if($i['roll']==$j['roll'])
                   {
                     $st4=$conn4->prepare("select count(pass) from smdata where pass=\"f\" and rollno=?");
                     $st4->bind_param("s",$j['roll']);
                      $st4->execute();
                      $res4=$st4->get_result();
                      // var_dump($res4->fetch_all());
                      $row=$res4->fetch_assoc();
                     if($row['count(pass)']<=$r)
                       {
                           echo " ".$j['mark'];
                       }
                   }
             }
       echo "<br>";

    }
     $ar="17US9817";
    
    

?>
<?php
//session_start();
/*$servername = "localhost";
$username = "webdata";
$password = "Asm*78654321";
$db="test";*/
include "sqlcon.php";

   $roll="17US9601";
     
     if(isset($_GET["cname"]))
      {

    $cname=$_GET["cname"];
     }
     
    // Create connection
    $conn2 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
    }
     //$txt="<table>";
     $st2=$conn2->prepare("select count(mark) from smdata where rollno=? AND pass=\"f\"");
     $st2->bind_param("s",$roll);

     $st2->execute();
     $res2=$st2->get_result();
  //   var_dump($res2->fetch_all());
    // echo res2[0]['name'];
    
    $row2=$res2->fetch_assoc();

    $sary= $row2['count(mark)'];

    $st2->close();
    echo $sary;



     // Create connection
     $conn3 = new mysqli($servername, $username, $password, $db);
     // Check connection
     if ($conn3->connect_error) {
     die("Connection failed: " . $conn2->connect_error);
     }
      //$txt="<table>";
      $st3=$conn3->prepare("select * from percentage where rollno=?");
      $st3->bind_param("s",$roll);
 
      $st3->execute();
      $res3=$st3->get_result();
   //   var_dump($res2->fetch_all());
     // echo res2[0]['name'];
     
     $row3=$res3->fetch_assoc();
     
     $p10=$row3['10th'];$p12=$row3['12th'];$psem=$row3['sem'];
 
     $st2->close();










    
    // Create connection
    $conn1 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn1->connect_error) {
    die("Connection failed: " . $conn1->connect_error);
    }
     $txt="<table>";
     $st1=$conn1->prepare("select * from cpny where name=?");
     $st1->bind_param("s",$cname);

     $st1->execute();
     $res1=$st1->get_result();
     //var_dump($res2->fetch_all());
    // echo res2[0]['name'];
    
     $row1=$res1->fetch_assoc();
   //  echo row1[0]['name'];
      foreach($res1 as $v => $i)
         {
              $txt.="<tr><th colspan=\"2\">".$i['name']."</th></tr>".
               "<tr><td>Description:</td><td>".$i['descr']."</td></tr>".
               "<tr><td>Eligible:</td><td>".$i['eligible']."</td></tr>".
               "<tr><td>10th Percentage:</td><td>".$i['10th']."</td></tr>".
               "<tr><td>12th Percentage:</td><td>".$i['12th']."</td></tr>".
               "<tr><td>SEM Percentage:</td><td>".$i['sem']."</td></tr>".
               "<tr><td>Last Date:</td><td>".$i['date']."</td></tr>";
              
                           // echo $i['name']." ".$i['eligible'];
                           if($i['ary']=="")$txt.= "<tr><td>Arrear :</td><td>Allowed</td></tr>";
                           else $txt.= "<tr><td>Arrear :</td><td>".$i['ary']."</td></tr>";
                           $txt.="<tr colspan=\"2\"><td>";
                                  if($i['ary']!=0)
                                     {
                                      if($p10>=$i['10th']&&$p12>=$i['12th']&&$psem>=$i['sem']&&$sary<=$i['ary'])$txt.="you are eligible</td></tr>";
                                      else   $txt.="you are not eligible</td></tr>";
                                     }
                                     else
                                       {
                                        if($p10>=$i['10th']&&$p12>=$i['12th']&&$psem>=$i['sem'])$txt.="you are eligible</td></tr>";
                                        else   $txt.="you are not eligible</td></tr>";
                                       }
        } 
        $txt.="</table>";
        echo $txt;
        $st1->close();
?>



<?php
session_start();
/*$servername = "localhost";
$username = "webdata";
$password = "Asm*78654321";
$db="test";*/
include "sqlcon.php";

   $roll=$_SESSION['roll'];
     
     if(isset($_GET["cname"]))
      {

    $cname=$_GET["cname"];
     }
     
    

    
    // Create connection
    $conn1 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn1->connect_error) {
    die("Connection failed: " . $conn1->connect_error);
    }
    $st1=$conn1->prepare("insert into cpnyapp(rollno,cpname) values(?,?);");
    $st1->bind_param("ss",$roll,$cname);

    $sig1=$st1->execute();
    
     if($sig1)echo "t";
     else echo "false";
     $st1->close();
     
?>
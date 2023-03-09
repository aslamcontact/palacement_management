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
    $st=$conn->prepare("select dept,class,sec,roll,cpname,name,reg,contact,email from student   join cpnyapp where cpnyapp.cpname=? and student.roll=cpnyapp.rollno order by dept,class,sec,roll asc;");
    $st->bind_param("s",$cname);

    $sig=$st->execute();
    
    $res=$st->get_result();
     //var_dump($res->fetch_all());
    $tab="<table>";
     //$row=$res->fetch_assoc();
     
      foreach($res as $v => $i)
         {
             $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['dept']."</td><td class=\"row\">".$i['class']."</td><td class=\"row\">".$i['sec']."</td><td  class=\"row\">".$i['roll']."</td><td class=\"row\"><input class=\"btn-danger\" type=\"button\" value=\"remove\" onclick=\"appremove('".$i['roll']."','".$i['cpname']."');\"></td></tr>";
         } 
         $tab.="<tr><td><br></td></tr><tr><td colspan=\"5\" align=\"center\"><input class=\"btn btn-primary\" type=\"button\" value=\"Print\"onclick=\"prin()\"></td></tr></table><br><br><b>- - - - -Preview- - - - -</b><br><div id=\"out\"><center><p id=\"cap\"></p> <br>Company Nmae:".$cname."<br><br><table class=\"tab\">
         <tr><th>Department</th><th>Course</th><th>Section</th><th>Name</th><th>Roll No</th><th>Reg no</th><th>Contact</th><th>Email</th></tr>";


         foreach($res as $v => $i)
         {
             $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['dept']."</td><td class=\"row\">".$i['class']."</td><td class=\"row\">".$i['sec']."</td><td class=\"row\">".$i['name']."</td><td class=\"row\">".$i['roll']."</td><td class=\"row\">".$i['reg']."</td><td class=\"row\">".$i['contact']."</td><td class=\"row\">".$i['email']."</td></tr>";
         } 
         $tab.="</table></div></div><br><br>";
         
         echo $tab;
    
    
    
    $st->close();
        }
  else
  {
    session_destroy();
    
    header("Location:".$url."/placement/college/index.php");
    
    
  }

?>
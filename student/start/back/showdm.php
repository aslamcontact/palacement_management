<?php

session_start();
include "../../../confi/sqlcon.php";
include "../../../confi/phpcon.php";

if($_SESSION['studlog']=="active")
{
  $roll=$_SESSION['roll'];







    $roll=$_SESSION['roll'];
     
    
    
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $st=$conn->prepare("select address,rollno,roll,email,reg,fname,mname,class,dept,sec,dob,batch,contact,name,sem,subcode,mark,pass from student inner join smdata on student.roll=smdata.rollno where rollno=?;");
    $st->bind_param("s",$roll);
    $tab;
    $sig=$st->execute();

    $res=$st->get_result();
     //var_dump($res->fetch_all());
  
    // $row=$res->fetch_assoc();

    $conn2 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
    }
    $st1=$conn2->prepare("select address,roll,email,reg,fname,mname,class,dept,sec,dob,batch,contact,name from student where roll=?;");
    $st1->bind_param("s",$roll);
  // $tab;
    $sig1=$st1->execute();

    $res2=$st1->get_result();
     //var_dump($res->fetch_all());
  
     $row=$res2->fetch_assoc();


     $conn3 = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn3->connect_error) {
    die("Connection failed: " . $conn3->connect_error);
    }
    $st3=$conn3->prepare("select 10th,12th,sem from percentage where rollno=?;");
    $st3->bind_param("s",$roll);
  // $tab;
    $sig3=$st3->execute();

    $res3=$st3->get_result();
     //var_dump($res->fetch_all());
  
     $row3=$res3->fetch_assoc();
     $t=strcmp(strtoupper($row['roll']),$roll);
    if($t==0)
     {
   
                  
                    $tab="<table class=\"small\"><tr><th class=\"row\"  colspan=\"2\"><center>Basic Details</center></th></tr><tr class=\"rnum\"><td class=\"row\">Reg No</td><td class=\"row\">".$row['reg']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Roll No</td><td class=\"row\">".$row['roll']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Name</td><td class=\"row\">".$row['name']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Email</td><td class=\"row\">".$row['email']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Contact</td><td class=\"row\">".$row['contact']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">DOB</td><td class=\"row\">".$row['dob']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Department</td><td class=\"row\">".$row['dept']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Class</td><td class=\"row\">".$row['class']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Sec</td><td class=\"row\">".$row['sec']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Batch</td><td class=\"row\">".$row['batch']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Father Name</td><td class=\"row\">".$row['fname']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Mother Name</td><td class=\"row\">".$row['mname']."</td></tr>
                    <tr class=\"rnum\"><td class=\"row\">Address</td><td class=\"row\">".$row['address']."</td></tr>
                    </tr></table><br><br><br>";

                /*  $init=1;
     while($init <= 6)
       {
                          
                        $tab.="<br><table><tr><th  class=\"row\" colspan=3><center>".$init."st Sem</center></th></tr><tr><th class=\"row\">Subject</th><th class=\"row\">mark</th><th class=\"row\">Status</th></tr>";
                      foreach($res as $v => $i)
                        {
                                  if($init==$i['sem'])
                                    {
                                  $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['subcode']."</td><td class=\"row\">".$i['mark']."</td><td class=\"row\">".$i['pass']."</td></tr>";
                                    }
                        } 
                      //  $tab.="</table><br><br><b>- - - - -Preview- - - - -</b><br><div id=\"out\"><center><p id=\"cap\"></p> <br>Company Nmae:".$cname."<br><br><table class=\"tab\">
                        // <tr><th>Department</th><th>Course</th><th>Section</th><th>Name</th><th>Roll No</th><th>Reg no</th><th>Contact</th><th>Email</th></tr>";
                          

                        //foreach($res as $v => $i)
                        //{
                          //  $tab.="<tr class=\"rnum\"><td class=\"row\">".$i['dept']."</td><td class=\"row\">".$i['class']."</td><td class=\"row\">".$i['sec']."</td><td class=\"row\">".$i['name']."</td><td class=\"row\">".$i['roll']."</td><td class=\"row\">".$i['reg']."</td><td class=\"row\">".$i['contact']."</td><td class=\"row\">".$i['email']."</td></tr>";
                        //} 
                        $tab.="</table>";
                        $init++;
        }  */
         echo $tab;
      }

      else {//echo "please Enter Correct Roll";
           }
    
    
    
    $st->close();
   // $st1->close();
    //$st3->close();
  }
  else
    {
  
      session_destroy();
       
      header("Location: ".$url."/placement/student/index.php");
      
    }
    ?>
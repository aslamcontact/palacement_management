<?php
include "../../confi/sqlcon.php";
include "../../confi/phpcon.php";
  session_start();
  if(isset($_GET["user"]))
  {

      $user=$_GET["user"];
   }
   if(isset($_GET["pass"]))
   {

        $pass=$_GET["pass"];
    }
    


    $conn = new mysqli($servername, $username, $password, $db);
    // Check connection
    if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
    }
    $st=$conn->prepare("select roll,dob from student where roll=? and dob=?;");
    $st->bind_param("ss",$user,$pass);
  // $tab;
    $sig=$st->execute();

    $res=$st->get_result();
     //var_dump($res->fetch_all());
  
     $row=$res->fetch_assoc();
             if($sig)
               {
                if((strcmp($row['roll'],"")!=0) && (strcmp($row['dob'],"")!=0) )
                   {
                    if((strcmp($row['roll'],$user)==0) && (strcmp($row['dob'],$pass)==0) )
                       {
                           $_SESSION['studlog']="active";
                           $_SESSION['roll']=$row['roll']; 
                                echo $url."/placement/student/start/index.php";
                                
                          
                       }
                       else  echo $url."/placement/student/start/index.php";
                      }
                      else  echo $url."/placement/student/start/index.php";
                       
                           
                       
               }

               ?>
        

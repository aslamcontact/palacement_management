<?php
include "../../../confi/sqlcon.php";
include "../../../confi/phpcon.php";
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
    if ($conn->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
    }
    $st=$conn->prepare("select admin,pass from adlog where admin=? and pass=?;");
    $st->bind_param("ss",$user,$pass);
  // $tab;
    $sig=$st->execute();

    $res=$st->get_result();
     //var_dump($res->fetch_all());
  
     $row=$res->fetch_assoc();
             if($sig)
               {
                if((strcmp($row['admin'],"")!=0) && (strcmp($row['pass'],"")!=0) )
                   {
                    if((strcmp($row['admin'],$user)==0) && (strcmp($row['pass'],$pass)==0) )
                       {
                           $_SESSION['admlog']="active";
                           
                          echo $url."/placement/college/start.php";
                       }
                       else echo $url."/placement/college/start.php";
                  
                       
                      }
                      else echo $url."/placement/college/start.php";
                       
                           
                       
               }
               

               ?>
        

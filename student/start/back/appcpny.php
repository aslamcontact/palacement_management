
<?php
session_start();
include "../../../confi/sqlcon.php";
include "../../../confi/phpcon.php";

if($_SESSION['studlog']=="active")
{
  //$roll=$_SESSION['roll'];


  // $roll=$_SESSION['roll'];
     
     if(isset($_GET["cname"]))
      {

    $cname=$_GET["cname"];
     }
     if(isset($_GET["roll"]))
     {

   $roll=$_GET["roll"];
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
    
     if($sig1)echo "<font color=green>Successfully Applied</font>";
     else echo "<br><font color=red>You are Already Applied<br> (If Any Querries Contact Placement Office)</font><br><br>";
     $st1->close();

    }
    else
      {
    
        session_destroy();
         
        header("Location: ".$url."/placement/student/index.php");
        
      }
     
?>
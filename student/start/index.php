<?php
 session_start();
 include "../../confi/phpcon.php";
 if(isset($_SESSION['admlog']))
 {
 if($_SESSION['studlog']=="active")
 {
  


?>
<!DOCTYPE html>
<html lag="en">
  
   <head>
      
      <meta name="viewport" content="width=device-width, initial-scale=1">
     
      <link rel="stylesheet" href="design/main.css">
         
          <link rel="stylesheet" href="../boot/css/bootstrap.min.css">
  <script src="../jquery/jquery-3.5.1.min.js"></script>
  <script src="../boot/js/bootstrap.min.js"></script> 
  
  <script src="js/ajax.js"></script>      

       
       <title>
             Jamal mohamed College
      </title>

   </head>
  <boby>
  
 
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand">JMC </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul  onclick="start('detail')" class="nav navbar-nav navbar-left">
        
           <li><a>Details</a></li>

       </ul>

        <ul  onclick="start('mrk')" class="nav navbar-nav navbar-left">

               <li><a>Marks</a></li>
        </ul>

        <ul  onclick="start('per')" class="nav navbar-nav navbar-left">

             <li><a>Percentage</a> </li>
        </ul>
        <ul onclick="listcpny()" class="nav navbar-nav navbar-left">

            <li><a>Company</a> </li>
       
      </ul>
      <ul onclick="alogout()" class="nav navbar-nav navbar-right">
        
        <li><a ><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
 <center> <div class="container" id="main"></div>
 
</center>
 

   <script>
   start('detail');
   </script>

  </body>
</html>
<?php
 }
 else
   {
     session_destroy();
     
    header("Location:".$url."/placement/student/index.php?er=1");
     
     
   }
  }
  else
   {
     
     
    header("Location:".$url."/placement/student/index.php?er=1");
     
     
   }
  ?>

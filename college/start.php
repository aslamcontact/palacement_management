<?php
 session_start();
 include "../confi/phpcon.php";
 if(isset($_SESSION['admlog']))
 {
 if($_SESSION['admlog']=="active")
 {
  


?>
<!DOCTYPE html>
  <html lang="en">
        <head>
         
            
            
           <meta charset="UTF-8"/>
           
           <meta http-equiv="X-UA-Compatible" content="le-edge" />
           <title>xl convertion</title>
           <script type="text/javascript" src="dep/xlsx.full.min.js"></script>
           <link rel="stylesheet" href="design/main.css">
           <script type="text/javascript" src="js/log/logm.js"></script>
           <link rel="stylesheet" href="boot/css/bootstrap.min.css">
           <script src="jquery/jquery-3.5.1.min.js"></script>
           <script src="boot/js/bootstrap.min.js"></script> 
            
        </head>
              
       <body>

      <!-- <ul>
  <li><a onclick="htmstud()">Student Data</a></li>
  <li><a onclick="htmmark()">Insert Mark</a></li>
  <li><a onclick="htmpert()">Insert Percentage</a></li>
  <li><a onclick="crcpny()">Create Company</a></li>
  <li><a onclick="showapp()">Applied Student</a></li>
  <li><a onclick="showedit()">Edit Student</a></li>
  <li><a onclick="showdel()">Deletion</a></li>
  <li><a  onclick="alogout()">Log Out</a></li>
</ul>-->
       
 
       <!-- <input type="button" value="Insert Stud info " onclick="htmstud()">
        <input type="button" value="Inset std Mark" onclick="htmmark()">
        <input type="button" value="insert percentage" onclick="htmpert()">
        <input type="button" value="Create Company" onclick="crcpny()">
        <input type="button" value="Applied Student" onclick="showapp()">
        <input type="button" value="edit" onclick="showedit()">
        <input type="button" value="delete" onclick="showdel()">-->
   
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Welcome</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Student <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li ><a onclick="htmstud()">Upload Basic Details</a></li>
            <li><a onclick="htmmark()">Upload Mark</a></li>
            <li><a onclick="htmpert()">Upload Percentage</a></li>
            <li><a onclick="showedit()">Edit Data</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Company <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li ><a onclick="crcpny()">New Company</a></li>
            <li><a onclick="showapp()">Applied</a></li>
            
          </ul>
        </li>
        <li><a onclick="showdel()">Deletion</a></li>
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
        <li><a onclick="alogout()"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
       <div id=p></div> <br>
        <!-- <button type="button" id="uploadExcel">Convert</button> -->
         
         <br>
       <!--  <input type="button" value="show" id="s" onclick="filter.test()">-->
     <!--  <input type="button" value="uplode" onclick="uplode(filter.result)">-->
        
     
      <div class="container" id="main"> </div>
    
    <div id="test"></div>
       
       </body>
     <script type="text/javascript" src="js/main.js"></script>
     <script type="text/javascript" src="js/ajax/main.js"></script>
     <script type="text/javascript" src="js/cpny/main.js"></script>
     




     

  </html>
  <?php
 }
 else
   {
     session_destroy();
     
     header("Location:".$url."/placement/college/index.php?er=1");
     
     
   }
  }else {
    
    
    header("Location:".$url."/placement/college/index.php?er=1");
    
    
  }
  ?>
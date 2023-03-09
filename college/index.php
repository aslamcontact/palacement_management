<?php
session_start();
  $_SESSION["admlog"]=null;
  
  


?>
<html>
  <head>
  
 <script type="text/javascript" src="js/log/logm.js"></script>
 <!--<link rel="stylesheet" href="design/log.css">-->
 <link rel="stylesheet" href="boot/css/bootstrap.min.css">
  <script src="jquery/jquery-3.5.1.min.js"></script>
  <script src="boot/js/bootstrap.min.js"></script> 
  </head>
 <body> 
     
 <div class="pt-lg-3 container-fluid" style="margin-top:12%">
              
              <h2 class="text-center text-info">Admin Login</h2>
            <br><br>
          <div class=" jumbotron text-center">  
            <label for="user" class="text-primary">Username : </label>   
            <input type="text" class="form-control" placeholder="Enter Username" id="user" required>  
            <label for="pass" class="text-primary">Password : </label>   
            <input type="password" class="form-control" placeholder="Enter Password" id="pass" required> 
            <?php
 if(isset($_GET['er']))
 {
   
 
        echo "<div id=\"err\"><br><center><font color=\"red\">Wrong UserName and Password</font><center><br></div>"; 
  
 }
  ?>
<br>
<div id="err"></div>
  <br>
       
            <button class="btn btn-primary" type="submit" onclick="adlog()"><font color="white">Login</font></button>   
           
        </div>       
        </div>   
         
</body>   
</html>  

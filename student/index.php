<?php
session_start();
  $_SESSION["studlog"]=null;
  $_SESSION["roll"]=null;
  


?>
<html>
  <head>
  
 <script type="text/javascript" src="js/logm.js"></script>
 <!--<link rel="stylesheet" href="desin/log.css">-->
 <link rel="stylesheet" href="boot/css/bootstrap.min.css">
  <script src="jquery/jquery-3.5.1.min.js"></script>
  <script src="boot/js/bootstrap.min.js"></script> 
  </head>
 <body> 
     
        <div class="pt-lg-3 container-fluid" style="margin-top:12%">
              
                <h2 class="text-center text-info">Student Login</h2>
              <br><br>
            <div class=" jumbotron text-center">  
            <label for="user" class="text-primary">Username : </label>   
            <input type="text" class="form-control" placeholder="Enter Roll No" id="user" required>  <br>
            <label for="pass" class="text-primary">Password : </label>   
            <input type="password" class="form-control" placeholder="Enter DOB (eg:ddmmyyyy)" id="pass" required> <br>
            
            <?php
 if(isset($_GET['er']))
 {
   
 
        echo "<div id=\"err\"><center><font color=red>Wrong Username (or) Password </font></center></div>"; 
  
 }
  ?><center><div id="err"></div></center>
            <button class="btn btn-primary" type="submit" onclick="adlog()"><font color="white">Login</font></button>   
           
          </div>     
        </div>   
         
</body>   
</html>  

<?php
session_start();
include "../../../confi/sqlcon.php";
include "../../../confi/phpcon.php";

if($_SESSION['studlog']=="active")
{
  $roll=$_SESSION['roll'];



     
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
    //echo $sary;



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
     $txt="<br><div class=\"jumbotron\"><table>";
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
              $txt.="<tr ><th colspan=\"2\" align=center><br><center><b>".$i['name']."</b></center><br></th></tr>".
               "<tr><td colspan=\"2\" align=center><small class=\"text-primary\">ABOUT</small><br></td></tr><tr><td colspan=\"2\" align=center><small class=\"text-muted small\">".$i['descr']."</small><br></td></tr>".
               "<tr><td colspan=\"2\" align=center><small class=\"text-primary\">ELIGIBLE</small></b><br></td></tr><tr><td colspan=\"2\" align=center><small class=\"text-muted small\">".$i['eligible']."</small></td></tr>".
               "<tr><td><small class=\"text-primary\">Last Date:</small></td><td align=center><small class=\"text-muted\">".$i['date']."</small></td></tr>".
               "<tr><td><small class=\"text-primary\">10th Percentage:</small></td><td align=center><small class=\"text-muted\">".$i['10th']."</small></td></tr>".
               "<tr><td><small class=\"text-primary\">12th Percentage:</small></td><td align=center><small class=\"text-muted\">".$i['12th']."</small></td></tr>".
               "<tr><td><small class=\"text-primary\">SEM Percentage:</small></td><td align=center><small class=\"text-muted\">".$i['sem']."</small></td></tr>";
               
              
                           // echo $i['name']." ".$i['eligible'];
                           if($i['ary']=="")$txt.= "<tr><td><small class=\"text-primary\">Arrear :</small></td><td align=center><small class=\"text-muted\">Allowed</small></td></tr><tr><td align=center colspan=\"2\"><div id=\"erapp\"></div></td></tr>";
                           else $txt.= "<tr><td><small class=\"text-primary\">Arrear :</small></td><td align=center><small class=\"text-muted\">".$i['ary']."</small></td></tr><tr><td align=center colspan=\"2\"><div id=\"erapp\"></div></td></tr>";
                           $txt.="<tr><td colspan=\"2\" align=center>";
                                  if($i['ary']!=0)
                                     {
                                      if($p10>=$i['10th']&&$p12>=$i['12th']&&$psem>=$i['sem']&&$sary<=$i['ary']){
                                        
                                        $txt.="<button type=\"button\" onclick=\"appycpny('".$i['name']."','".$roll."')\" class=\"btn btn-primary\">Apply</button></td></tr>";}
                                      else  {
                                       
                                        $txt.="<font color=red>You are Not Eligible</font></td></tr>";
                                            }
                                     }
                                     else
                                       {
                                        if($p10>=$i['10th']&&$p12>=$i['12th']&&$psem>=$i['sem']){
                                          
                                          $txt.="<button type=\"button\" onclick=\"appycpny('".$i['name']."')\" class=\"btn btn-primary\">Apply</button></td></tr>";}
                                        else {  
                                          $txt.="<font color=red>You are not Eligible</font></td></tr>";}
                                       }
                                     //  $txt.="<tr><td>Last Date:</td><td align=center>".$i['date']."</td></tr>";
        } 
        $txt.="</table></div><br><br>";
        echo $txt;
        $st1->close();

      }
      else
        {
      
          session_destroy();
           
          header("Location: ".$url."/placement/student/index.php");
          
        }
        ?>


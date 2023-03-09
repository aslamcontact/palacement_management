function prin()
  {
    var printContent='' +
    "<style type=\"text/css\">"+
    ".tab{"+
    " border-collapse: collapse ;"+
      "width: 100% ;"+
     " border: 1px solid black ;"+
    "}"+
    
   ".row,th{"+
      "text-align: left ;"+
      "padding: 8px ;"+
      "border: 1px solid black ;"+
    "}"+
    
    ".rnum:nth-child(even) {background-color:#C8C8C8;text-align: left;"+
      "padding: 8px;border: 1px solid black ;}"+
    "</style>"; 
     printContent +="<br>"+document.getElementById("out").innerHTML;
   // document.getElementById("test").innerHTML=printContent.innerHTML;
    var WinPrint = window.open('', '', '');
    WinPrint.document.write(printContent);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  }
function stuplode(data)
  {
    document.getElementById("out").innerHTML="Please wait";
    uplode(data);
  }
function uplode(data) {
  //document.getElementById("test").innerHTML=phpsig;
  
   var data=data;
   var errout;
     var err=[];  
    var dis=document.getElementById("out");
        dis.innerHTML=""; 
        dis.innerHTML="Please Wait....."
        
        var udata;
            for(var i=0;i<data.length;i++)
                 {
                   //test=true;
                    var xmlhttp = new XMLHttpRequest();
                    if(xmlhttp)
                    {
                   // xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                    
                  udata=JSON.stringify(data[i])
                   //udata=a;
                    
                   var sig;
                 
       

        xmlhttp.onreadystatechange = function()
                                   {

            if (this.readyState == 4 && this.status == 200)
             {

            document.getElementById("out").innerHTML="Please Wait";
                        sig=this.responseText;
                          if(sig!="true")
                          {
                            err.push(data[i]);
                          //  document.getElementById("test").innerHTML=sig;
                         }
                        
                          
             }
            
            
             
                                   };
          xmlhttp.open("GET","back/suplode.php?sjson="+udata,false);
        
        
        xmlhttp.send();
                 
                    }
                    else
                     {
                       document.getElementById("out").innerHTML="Plase try Later";
                     }
                    }
                 if(err.length>0)
                    {
                  errout="<table><tr><th colspan=\"2\">This "+err.length+" Data is already stored in database</th></tr>";
                 for(var i=0;i<err.length;i++)
                    {
                       errout+="<tr><td>"+err[i].ROLLNO+"</td>"+"<td>"+err[i].DEPARTMENT+"</td><td>"+err[i].CLASS+"</td><td>"+err[i].BATCH+"</td></tr>"
                    }
                    dis.innerHTML=errout;
                  }
                else 
                  {
                    dis.innerHTML="Successfully Uploaded";                         
                  }    
                                 
                                               
    
}
function upmark(fdata)
  {    var esig=0;
     //  var err="<table style=\"color:red;\" align=\"center\"><tr><td>This Data is Already Stored OR RollNO is Not in Database </td></tr></table><table style=\"color:red;\" align=\"center\">";
       var err="Successfully Updated";
     var sjson="{";
       var fjson;
       var pmark=[];
       var data=fdata;
       var hm=document.getElementsByClassName("con");
       document.getElementById("out").innerHTML=" ";
       document.getElementById("out").innerHTML="Please Wait........";
       var udata;
     //  var smark;
       var sem=document.getElementById("sem").value;
         document.getElementById("out").innerHTML="";


            for(var i=0;i<hm.length;i++)
                {
                   pmark.push(hm[i].value);
                }
                smark=pmark.toString();



           for(var i=0;i<filter.sop.length;i++)
             {
                 n=filter.sop[i];
                 sjson+="\""+n+"\":";
                 val=document.getElementById(n).value;
                    if(filter.sop.length-1!=i)sjson+="\""+val+"\",";
                    else sjson+="\""+val+"\"";
             }
             sjson+="}";


            fjson=JSON.parse(sjson);

          
            for(var i=0;i<data.length;i++)
                 {
                   //test=true;
                    var xmlhttp = new XMLHttpRequest();
                    if(xmlhttp)
                    {
                   // xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                    
                  udata=JSON.stringify(data[i])
                   //udata=a;
                    
                   var sig;
                 
       

        xmlhttp.onreadystatechange = function()
                                   {

            if (this.readyState == 4 && this.status == 200)
             {

            
                        sig=this.responseText;
                          if(sig!="")
                          {
                            if(esig==0) err="<table style=\"color:red;\" align=\"center\"><tr><td>This Data is Already Stored OR RollNO is Not in Database </td></tr></table><table style=\"color:red;\" align=\"center\">";
                            err+="<tr>"+sig+"</tr>";
                            esig++;
                           // document.getElementById("out").innerHTML+=sig;
                         }
                        
                          
             }
            
            
             
                                   };
        
        xmlhttp.open("GET","back/smrkup.php?data="+udata+"&pmark="+pmark+"&sem="+sem+"&sjson="+sjson,false);
        
        
        xmlhttp.send();
                 
                    }
                    else
                     {
                       document.getElementById("out").innerHTML="Try Again Later";
                     }
                    }
              err+="</table>";
                
           // if(esig>0)
           document.getElementById("out").innerHTML=err;
           // else document.getElementById("out").innerHTML="<font color=green>Sucessfully Uploaded</font>";


  }

  function uplper(data) {
    //document.getElementById("test").innerHTML=phpsig;
    
     var data=data;
     var errout;
       var err=[];  
      var dis=document.getElementById("out");
          dis.innerHTML=""; 
          dis.innerHTML="Please Wait....."
          
          var udata;
              for(var i=0;i<data.length;i++)
                   {
                     //test=true;
                      var xmlhttp = new XMLHttpRequest();
                      if(xmlhttp)
                      {
                     // xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                      
                    udata=JSON.stringify(data[i])
                     //udata=a;
                      
                     var sig;
                   
         
  
          xmlhttp.onreadystatechange = function()
                                     {
  
              if (this.readyState == 4 && this.status == 200)
               {
  
              
                          sig=this.responseText;
                            if(sig!="true")
                            {
                              err.push(data[i]);
                            //  document.getElementById("test").innerHTML=sig;
                           }
                          
                            
               }
              
              
               
                                     };
            xmlhttp.open("GET","back/perup.php?sjson="+udata,false);
          
          
          xmlhttp.send();
                   
                      }
                      else
                       {
                         document.getElementById("out").innerHTML="Plase try Later";
                       }
                      }
                   if(err.length>0)
                      {
                    errout="<table><tr><th colspan=\"3\"><font color=red>This "+err.length+" Data is already stored (OR) Basic data is Not Stored </font></th></tr>";
                   for(var i=0;i<err.length;i++)
                      {
                         errout+="<tr><td>"+err[i].ROLLNO+"</td><td>"+err[i].CLASS+"</td><td>"+err[i].DEPARTMENT+"</td></tr>"
                      }
                      dis.innerHTML=errout;
                    }
                  else 
                    {
                      dis.innerHTML="<font color=green>Successfully Uploaded</font>";                         
                    }    
                                   
                                                 
      
  }

  function listcpy()
      {
        var dis=document.getElementById("lcpy");
        var xmlhttp = new XMLHttpRequest();
        if(xmlhttp)
        {
       

             xmlhttp.onreadystatechange = function()
                       {

                    if (this.readyState == 4 && this.status == 200)
                    {


                       dis.innerHTML=this.responseText;
                    
                    
                      
                    }


 
                       };
                 xmlhttp.open("GET","back/listcpy.php",true);


                xmlhttp.send();
     
        }
        else
         {
           dis.innerHTML="Plase try Later";
         }
      }
    function upcpy()
       {
        var dis=document.getElementById("perr");
           cname=document.getElementById("cname").value;
           date=document.getElementById("idate").value;
           des=document.getElementById("des").value;
           eli=document.getElementById("eli").value;
           p10=document.getElementById("p10").value;
           p12=document.getElementById("p12").value;
           psem=document.getElementById("psem").value;
           arear=document.getElementById("arr").value;
           if(cname==""||des==""||eli==""||p10==""||p12==""||psem==""||arear=="")
              {
                 dis.innerHTML="<br><font color=red>Please Fill All Fields</font><br>";
              }
             else
              {
           sjson="{\"cname\":\""+cname+"\",\"des\":\""+des+"\",\"eli\":\""+eli+"\",\"p10\":"+p10+",\"p12\":"+p12+",\"psem\":"+psem+",\"arear\":"+arear+",\"date\":\""+date+"\"}";
          jsond=JSON.parse(sjson);
          sjson=JSON.stringify(jsond);  

         
             dis.innerHTML=jsond.date;

          var xmlhttp = new XMLHttpRequest();
          if(xmlhttp)
          {
         
  
               xmlhttp.onreadystatechange = function()
                         {
  
                      if (this.readyState == 4 && this.status == 200)
                      {
  
  
                         dis.innerHTML=this.responseText+"<br>";
                      
                         listcpy();
                         crcpny();
                        
                      }
  
  
   
                         };
                   xmlhttp.open("GET","back/upcpy.php?sjson="+sjson,true);
  
  
                  xmlhttp.send();
       
          }
          else
           {
             dis.innerHTML="Plase try Later";
           }
          }
         
       }
       function delcpy(val)
          {
              var cname=val;
              var dis=document.getElementById("perr");
                //dis.innerHTML=cname;
              var xmlhttp = new XMLHttpRequest();
          if(xmlhttp)
          {
         
  
               xmlhttp.onreadystatechange = function()
                         {
  
                      if (this.readyState == 4 && this.status == 200)
                      {
  
  
                         dis.innerHTML=this.responseText;
                         listcpy();
                      
                      
                        
                      }
  
  
   
                         };
                   xmlhttp.open("GET","back/delcpy.php?cname="+cname,true);
  
  
                  xmlhttp.send();
       
          }
          else
           {
             dis.innerHTML="Plase try Later";
           }
          
            listcpy();

          }
     function applicpy()
          {
            var dis=document.getElementById("cpny");
            var xmlhttp = new XMLHttpRequest();
            if(xmlhttp)
            {
           
    
                 xmlhttp.onreadystatechange = function()
                           {
    
                        if (this.readyState == 4 && this.status == 200)
                        {
    
    
                           dis.innerHTML=this.responseText;
                        
                        
                          
                        }
    
    
     
                           };
                     xmlhttp.open("GET","back/applicpy.php",true);
    
    
                    xmlhttp.send();
         
            }
            else
             {
               dis.innerHTML="Plase try Later";
             }
          }
    function applishow(val)
          {
           var cname=val;
           var add=document.getElementById("filter");
           
           
            var dis=document.getElementById("pre");
            var xmlhttp = new XMLHttpRequest();
            if(xmlhttp)
            {
           
    
                 xmlhttp.onreadystatechange = function()
                           {
    
                        if (this.readyState == 4 && this.status == 200)
                        {
    
    
                           dis.innerHTML=this.responseText;
                           add.innerHTML="<table><tr><td><label for=\"roll\">Roll No:</label></td><td><input class=\"form-control\" type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\"></td></tr><tr><td colspan=2><br><center>  <input class=\"btn btn-success\" type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></center></td></tr><tr><td><br></td>"
                           +"<tr><td colspan=\"1\"><label for=\"caption\">Caption for Table:</label></td><td><textarea class=\"form-control\" rows=\"7\" cols=\"50\" oninput=\"tcap()\" id=\"caption\"></textarea></td></tr><tr><td><br></td></tr>"
                           +"<tr></tr></table>"
                        
                        
                          
                        }
    
    
     
                           };
                     xmlhttp.open("GET","back/applishow.php?cname="+cname,true);
    
    
                    xmlhttp.send();
         
            }
            else
             {
               dis.innerHTML="Plase try Later";
             }
          }

          function appremove(val,val2)
          {
           var roll=val;
           var cname=val2;
           
            
            var xmlhttp = new XMLHttpRequest();
            if(xmlhttp)
            {
           
    
                 xmlhttp.onreadystatechange = function()
                           {
    
                        if (this.readyState == 4 && this.status == 200)
                        {
    
    
                           //dis.innerHTML=this.responseText;
                           applishow(cname);
                        
                        
                          
                        }
    
    
     
                           };
                     xmlhttp.open("GET","back/appremove.php?roll="+roll+"&cname="+cname,true);
    
    
                    xmlhttp.send();
         
            }
            else
             {
               dis.innerHTML="Plase try Later";
             }
          }
    function addapp(val)
       {
      var cname=val;
      var roll=document.getElementById("roll").value;
      dis=document.getElementById("ader");


      var xmlhttp = new XMLHttpRequest();
      if(xmlhttp)
      {
     

           xmlhttp.onreadystatechange = function()
                     {

                  if (this.readyState == 4 && this.status == 200)
                  {


                     var sig=this.responseText;
                       if(sig=="true"){dis.innerHTML="<font color=green>New Student Added Successfully</font>"; }
                       else dis.innerHTML="<font color=red>Please Enter the Correct Roll No</font>";

                    
                       applishow(cname);
                  
                    
                  }



                     };
               xmlhttp.open("GET","back/appadd.php?roll="+roll+"&cname="+cname,true);


              xmlhttp.send();
   
      }
      else
       {
         dis.innerHTML="Plase try Later";
       }
      
       }


       function showdm()
       {
        document.getElementById("e").innerHTML="";
        var dis=document.getElementById("out");
        var roll=document.getElementById("roll").value;
           if(roll=="")
             {
             document.getElementById("e").innerHTML="<font color=red>Please Enter Roll No</font>";
             }
        else{
      
         var xmlhttp = new XMLHttpRequest();
         if(xmlhttp)
         {
        
 
              xmlhttp.onreadystatechange = function()
                        {
 
                     if (this.readyState == 4 && this.status == 200)
                     {
 
 
                        dis.innerHTML=this.responseText;
                        //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
  
                     
                     
                       
                     }
 
 
  
                        };
                  xmlhttp.open("GET","back/showdm.php?roll="+roll,true);
 
 
                 xmlhttp.send();
      
         }
         else
          {
            dis.innerHTML="Plase try Later";
          }
        }
       }
       function upsddata(upsig)
          { var dis=document.getElementById("err");
            
           //var dis=document.getElementById("err");
            document.getElementById("err").innerHTML="g";
            var roll=document.getElementById("roll").value;
             if(upsig=="updata")
              {
                    var upbd=document.getElementById("ndetail").value;
                    var field=document.getElementById("opdetail").value;
                   
                    var dis=document.getElementById("err");
                        
                       if(upbd=="")
                           {
                              dis.innerHTML="<font color=red>Please Enter New Value for Details</font>";
                           }
                           
                           else
                             {
                              if(field=="reg"||field=="dept"||field=="class"||field=="sec")
                              {
                                upbd=upbd.toUpperCase();
                              }
                               
                              var xmlhttp1 = new XMLHttpRequest();
                              if(xmlhttp1)
                              {
                             
                      
                                   xmlhttp1.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                                              
                                                

                                          
                                            
                                            
                                           
                                         dis.innerHTML=this.responseText;
                                          showdm();
                                              
                                              
                                            
                                           


                                         
                                    
                                
                                            
                                           
                                         
                                    
                                                
                                               
                                        
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                       
                                          
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp1.open("GET","back/studed.php?roll="+roll+"&upsig="+upsig+"&upbd="+upbd+"&field="+field,true);
                      
                      
                                      xmlhttp1.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }

              if(upsig=="upper")
              {
               // document.getElementById("err").innerHTML="";
                    var npval=document.getElementById("nper").value;
                    var per=document.getElementById("opper").value;
                   
                    var dis=document.getElementById("err");
                       if(npval=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please Enter New Value For Percentage</font>";
                           }
                           else
                             {
                              
                               
                              var xmlhttp2 = new XMLHttpRequest();
                              if(xmlhttp2)
                              {
                             
                      
                                   xmlhttp2.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                      
                      
                                            
                                           
                                         dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                       
                                          showdm();
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp2.open("GET","back/studed.php?roll="+roll+"&per="+per+"&npval="+npval+"&upsig="+upsig,true);
                      
                      
                                      xmlhttp2.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }


              if(upsig=="upmark")
              {
                //document.getElementById("err").innerHTML="";
                    var nmark=document.getElementById("nmark").value;
                    var subcode=document.getElementById("subcode").value;
                    var npass=document.getElementById("pass").value;
                   
                    var dis=document.getElementById("err");
                       if(nmark==""||subcode=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please Enter  New mark and Subcode </font>";
                           }
                           else
                             {
                              
                               
                              var xmlhttp3 = new XMLHttpRequest();
                              if(xmlhttp3)
                              {
                             
                      
                                   xmlhttp3.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                      
                      
                                          
                                         dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                                         showdm();
                                          
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp3.open("GET","back/studed.php?roll="+roll+"&upsig="+upsig+"&nmark="+nmark+"&subcode="+subcode+"&npass="+npass,true);
                      
                      
                                      xmlhttp3.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }
              showdm();
              
          }


          function studdel(upsig)
          {
           // document.getElementById("err").innerHTML="";
            //var roll=document.getElementById("roll").value;
             if(upsig=="delcls")
              {
                    var cls=document.getElementById("cls").value;
                    var sec=document.getElementById("sec").value;
                    var dept=document.getElementById("dept").value;
                   
                    var dis=document.getElementById("err");
                       if(cls==""||sec==""||dept=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please Enter class,Section and Department</font>";
                           }
                           else
                             {
                          
                               
                              var xmlhttp4 = new XMLHttpRequest();
                              if(xmlhttp4)
                              {
                             
                      
                                   xmlhttp4.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                                              if(this.responseText=="success")
                                                {
                                                  dis.innerHTML="<font color=green>"+cls+" "+sec+" is Successfully Deleted</font> ";
                                                  
                                                }
                                               else
                                             dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                                             showbat();
                                          
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp4.open("GET","back/studdel.php?cls="+cls+"&dept="+dept+"&sec="+sec+"&upsig="+upsig,true);
                      
                      
                                      xmlhttp4.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }

              if(upsig=="delsub")
              {
                    var roll=document.getElementById("roll").value;
                    var subcode=document.getElementById("subcode").value;
                 //  document.getElementById("test").innerHTML="1";
                    var dis=document.getElementById("err");
                    
                       if(roll==""||subcode=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please entet roll and Subject code</font>";
                           }
                           else
                             {
                              
                              //document.getElementById("test").innerHTML="2";
                              var xmlhttp5 = new XMLHttpRequest();
                              if(xmlhttp5)
                              {
                             
                               // document.getElementById("test").innerHTML="3";
                                   xmlhttp5.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                      
                                            //document.getElementById("test").innerHTML="4";
                                            if(this.responseText=="success")
                                            {
                                              dis.innerHTML="<font color=red>"+subcode+" from "+roll+" is Successfully Deleted </font>";
                                              
                                            }
                                           else
                                         dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                                             showbat();
                                          
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp5.open("GET","back/studdel.php?roll="+roll+"&subcode="+subcode+"&upsig="+upsig,true);
                      
                      
                                      xmlhttp5.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }


              if(upsig=="delroll")
              {
                    var roll=document.getElementById("roll").value;
                    //var subcode=document.getElementById("subcode").value;
                    //var npass=document.getElementById("pass").value;
                   
                    var dis=document.getElementById("err");
                       if(roll=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please Enter Roll No</font> ";
                           }
                           else
                             {
                              
                               
                              var xmlhttp6 = new XMLHttpRequest();
                              if(xmlhttp6)
                              {
                             
                      
                                   xmlhttp6.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                      
                      
                                            if(this.responseText=="success")
                                            {
                                              dis.innerHTML="<font color=green>"+roll+" is Successfully Deleted</font> ";
                                              
                                            }
                                           else
                                         dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                                             showbat();
                                          
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp6.open("GET","back/studdel.php?roll="+roll+"&upsig="+upsig,true);
                      
                      
                                      xmlhttp6.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }

              if(upsig=="delbatch")
              {
                    var batch=document.getElementById("batch").value;
                    //var subcode=document.getElementById("subcode").value;
                    //var npass=document.getElementById("pass").value;
                   
                    var dis=document.getElementById("err");
                       if(batch=="")
                           {
                              document.getElementById("err").innerHTML="<font color=red>Please Enter Batch </font>";
                           }
                           else
                             {
                              
                               
                              var xmlhttp7 = new XMLHttpRequest();
                              if(xmlhttp7)
                              {
                             
                      
                                   xmlhttp7.onreadystatechange = function()
                                             {
                      
                                          if (this.readyState == 4 && this.status == 200)
                                          {
                      
                      
                                            if(this.responseText=="success")
                                            {
                                              dis.innerHTML="<font color=green>"+batch+" Batch is Successfully Deleted</font> ";
                                              
                                            }
                                           else
                                         dis.innerHTML=this.responseText;
                                             //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"
                       
                                          showbat();
                                          
                                            
                                          }
                      
                      
                       
                                             };
                                       xmlhttp7.open("GET","back/studdel.php?batch="+batch+"&upsig="+upsig,true);
                      
                      
                                      xmlhttp7.send();
                           
                              }
                              else
                               {
                                 dis.innerHTML="Plase try Later";
                               }
                             }
                           

              }
              showbat();
              
          }

          function showbat()
      {
        var dis=document.getElementById("sbat");
        var xmlhttp = new XMLHttpRequest();
        if(xmlhttp)
        {
       

             xmlhttp.onreadystatechange = function()
                       {

                    if (this.readyState == 4 && this.status == 200)
                    {


                       dis.innerHTML=this.responseText;
                    
                    
                      
                    }


 
                       };
                 xmlhttp.open("GET","back/showbat.php",true);


                xmlhttp.send();
     
        }
        else
         {
           dis.innerHTML="Plase try Later";
         }
      }

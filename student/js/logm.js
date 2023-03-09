function adlog()
            {
                var user=document.getElementById("user").value;
                var pass=document.getElementById("pass").value;
                dis=document.getElementById("err");
                if(user==""||pass=="")
                  {
                    dis.innerHTML="<font color=\"red\">Please Fill Username and Password  </font>";
                  }
                 else{
            var xmlhttp = new XMLHttpRequest();
            if(xmlhttp)
            {
           
    
                 xmlhttp.onreadystatechange = function()
                           {
    
                        if (this.readyState == 4 && this.status == 200)
                        {
    
    
                          // sign=this.responseText;
                          //  dis.innerHTML=sign;
                          // if(sign==true)
                              // {
                                location.replace(this.responseText);
                              // }
                             //  else{
                              //  dis.innerHTML="Wrong user Name or Password";
                             //  }
                            
                                  
                               
                           
                        
                        
                          
                        }
                     
    
     
                           };
                     xmlhttp.open("GET","back/alogch.php?pass="+pass+"&user="+user,true);
    
    
                    xmlhttp.send();
         
            }
            else
             {
               //dis.innerHTML="Plase try Later";
             }
             }
            }

            function alogout()
              {

                
            var xmlhttp = new XMLHttpRequest();
            if(xmlhttp)
            {
           
    
                 xmlhttp.onreadystatechange = function()
                           {
    
                        if (this.readyState == 4 && this.status == 200)
                        {
    
                             location.replace(this.responseText);
                       /*    sign=this.responseText;
                          //  dis.innerHTML=sign;
                           if(sign!="false")
                               {
                                location.replace(sign);
                               }
                               else if(sign=="false"){
                                   dis.innerHTML="Wrong user Name or Password";
                               }*/
                           
                        
                        
                          
                        }
    
    
     
                           };
                     xmlhttp.open("GET","back/alogout.php",false);
    
    
                    xmlhttp.send();
         
            }
            else
             {
               //dis.innerHTML="Plase try Later";
             }


              }

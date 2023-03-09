

   function start(sig)
   {
    var dis=document.getElementById("main");
      dis.innerHTML="";
   // var roll="17US9601";
       if(sig=="detail")  path="back/showdm.php";
       else if(sig=="per") path="back/showper.php";
       else if(sig=="mrk") path="back/showmrk.php";
       
   
  
     var xmlhttp = new XMLHttpRequest();
     if(xmlhttp)
     {
    

          xmlhttp.onreadystatechange = function()
                    {

                 if (this.readyState == 4 && this.status == 200)
                 {


                    dis.innerHTML=this.responseText;
                    //add.innerHTML="<table><tr><td>Roll No:</td><td><input type=\"text\" Placeholder=\"Enter Roll No\" id=\"roll\">  <input type=\"button\" value=\"Add\" onclick=\"addapp('"+cname+"');\"></td></tr><tr><td><br></td>"

                    xmlhttp=null;
                 
                   
                 }



                    };
              xmlhttp.open("GET",path,true);


             xmlhttp.send();
  
     }
     else
      {
        dis.innerHTML="Plase try Later";
      }
    
  
   }


   function listcpny()
   {
     var main=document.getElementById("main");
     main.innerHTML="<div id=\"lcpy\"></div><div id=\"scpny\"></div>";
     var dis=document.getElementById("lcpy");
     var xmlhttp = new XMLHttpRequest();
     if(xmlhttp)
     {
    

          xmlhttp.onreadystatechange = function()
                    {

                 if (this.readyState == 4 && this.status == 200)
                 {


                    dis.innerHTML=this.responseText;
                 
                 xmlhttp=null;
                   
                 }



                    };
              xmlhttp.open("GET","back/listcpny.php",false);


             xmlhttp.send();
  
     }
     else
      {
        dis.innerHTML="Plase try Later";
      }
      
   }


   function discpny(cname)
   {
     var dis=document.getElementById("scpny");
    // dis.innerHTML="";
     //var roll=roll;
     //main.innerHTML="<div id=\"lcpy\"></div>";
     //var dis=document.getElementById("lcpy");

     var xmlhttp1 = new XMLHttpRequest();
     if(xmlhttp1)
     {
    

          xmlhttp1.onreadystatechange = function()
                    {
              
                 if (this.readyState == 4 && this.status == 200)
                 {

                  /*   //document.getElementById("main").innerHTML="";
                    var sig=this.responseText;
                      if(sig=="t"){dis.innerHTML="Applied Successfully"; }
                      else dis.innerHTML="You are Already Applied or Contact Placement Incharge";
                   */   dis.innerHTML=this.responseText;

                     xmlhttp1=null;
                     // applishow(cname);
                 
                   
                 }
                 



                    };
              xmlhttp1.open("GET","back/discpny.php?cname="+cname,true);


             xmlhttp1.send();
  
     }
     else
      {
        dis.innerHTML="Plase try Later";
      }
    
   }

   function appycpny(cname,roll)
   {
     var dis=document.getElementById("erapp");
    // dis.innerHTML="";
     //var roll=roll;
     //main.innerHTML="<div id=\"lcpy\"></div>";
     //var dis=document.getElementById("lcpy");
        xmlhttp1=null;
     var xmlhttp2 = new XMLHttpRequest();
     if(xmlhttp2)
     {
    

          xmlhttp2.onreadystatechange = function()
                    {
              
                 if (this.readyState == 4 && this.status == 200)
                 {

                     //document.getElementById("main").innerHTML="";
                    // var sig=this.responseText;
                      dis.innerHTML=this.responseText;
            
                      //dis.innerHTML=this.responseText;
                     
                     xmlhttp2=null;
                     // applishow(cname);
                 
                   
                 }
                 



                    };
              xmlhttp2.open("GET","back/appcpny.php?cname="+cname+"&roll="+roll,true);


             xmlhttp2.send();
  
     }
     else
      {
        dis.innerHTML="Plase try Later";
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
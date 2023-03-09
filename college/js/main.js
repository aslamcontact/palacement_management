
    var ary=[],ind=0,classes=[],fltbtn;
    var xldata;
    var selectedFile;
    var filter={//format:["ROLLNO","REGNO","STUDENTNAME","FATHERNAME","MOTHERNAME","DEPARTMENT","SECTION","EMAIL","PHONE","CLASS","BATCH","DOB"],
                    // lformat:12,
                
                     chkf:function(jobj)
                     {
                       filter.ercol=[];                 
                        var res=[];
                        var count=0,chk=[];
            
                         for(i in jobj[0])
                         {
                            res.push(i); 
                         }
                         
                       
                                
                                for(var i=0;i<=this.format.length-1;i++)
                                      {
                                            for(var j=0;j<=res.length-1;j++)
                                                {
                                                    var isig=false;
                                                 for(c=0;chk.length>c;c++)
                                                 {
                                                     if(chk[c]==j)isig=true;
                                                 }
                                                      if(isig)continue;
                                                  
                                     
                                                    if(this.format[i]==res[j])
                                                         {
                                                             chk.push(j);
                                                             count++;
                                                           filter.ercol.push(i); 
                 
                                                             break;
                                                         }
                 
                                                }  
                                   }
                                
                             if(count==this.lformat)
                               {
                                   filter.col=res;
                              return true;
                               }                 
                               else return false;   
                 
                     },

                     htmdec:function()
                     {
    
                            var d=document.getElementById("filter");
                             d.innerHTML="";
                            var sel=document.createElement("select");
                                sel.multiple=true;
                                sel.setAttribute("id","sop");
                                sel.setAttribute("class","form-control");
                               sel.addEventListener('change',this.cond);
                               //sel.addEventListener('click',this.show);
                            

                            for(i in filter.col)
                            {
                            var op = document.createElement("option");
                                op.setAttribute("value", filter.col[i]);
                                var t = document.createTextNode(filter.col[i]);
                                    
                                op.appendChild(t);
                                sel.appendChild(op);
                        
                            }
                            d.appendChild(sel);
                           
    
                         /*   var btn = document.createElement("INPUT");
                            btn.setAttribute("type", "button");
                            btn.setAttribute("value", "continue");
                            btn.addEventListener(click,);
                             d.appendChild(sel);*/


                     },
                     cond:function()
                          {
                              
                            filter.sop=[];
                            d=document.getElementById("outer");
                            d.innerHTML=""; 
                            var htm="<table align=\"center\" cellspacing=\"50\">";
                            sel=document.getElementById("sop");
                           // this.show();

                                        for(var i=0;i<sel.options.length;i++)
                                           {
                                               if(sel.options[i].selected==true)
                                                  {
                                                      filter.sop.push(sel.options[i].value);                                                        
                                                  }
                                           }

                                           for(i in filter.sop)
                                             {
                                                  htm+="<tr><td><label aligh=center for=\""+filter.sop[i]+"\">"+filter.sop[i]+
                                                 "</label> : </td> <td> <select class=\"form-control con\"><option value=\"\">select filter</option><option value=\"=\">EQUAL TO</option><option value=\"<\">LESS THAN</option><option value=\">\">MORE THEN</option></select></td>"+
                                                 "<td> <input class=\"form-control\" type=\"text\" align=center id=\""+filter.sop[i]+"\"></td></tr>";
                                                 //htm+=htm;
                                             } 
                                             htm+="<tr><td colspan=\"2\"><br></td></tr></table><table cellspacing=40><tr><td align=left> <input class=\"btn btn-primary\" type=\"button\" value=\"start filter\"  onclick=\"filter.valid()\"></td><td align=right> <input class=\"btn btn-primary\" type=\"button\" value=\"print\" onclick=\"prin()\"></td></tr><tr> <td colspan=\"2\" align=center><br> <input class=\"btn btn-success\" type=\"button\" value=\"uplode\" onclick=\"stuplode(filter.result)\"></td></tr></table><br>";
                                             d.innerHTML=htm; 
                                             this.show();    
                                        
                             
                          },
                    fstart:function()
                         {
                            
                               var result=[];
                               var sig=false;
                               // this.sop=["SECTION"];
                            for(i in this.sop)
                                {
                                    con=document.getElementsByClassName("con");
                                    //document.getElementById("outer").innerHTML=con[0].value;
                                       if(sig==false)
                                          {
                                            for(var j=0;j<this.ordata.length;j++)                                       
                                                { 
                                                    //document.getElementById("test").innerHTML=con[i].selected.value;
                                                    ck=document.getElementById(this.sop[i]).value;
                                                                if(typeof this.ordata[j][this.sop[i]]=="string")
                                                                {
                                                                   
                                                                          switch(con[i].value)
                                                                            {
                                                                             case "=":
                                                                                if(this.ordata[j][this.sop[i]].trim().toLowerCase()==ck.toLowerCase())
                                                                                {
                                                                                    result.push(this.ordata[j]);
                                                                                        
                                                                                }
                                                                                break;
                                                                             case "<":
                                                                                if(this.ordata[j][this.sop[i]].trim().toLowerCase()<ck.toLowerCase())
                                                                                {
                                                                                    result.push(this.ordata[j]);
                                                                                        
                                                                                }
                                                                                break;
                                                                             case ">":
                                                                                if(this.ordata[j][this.sop[i]].trim().toLowerCase()>ck.toLowerCase())
                                                                                {
                                                                                    result.push(this.ordata[j]);
                                                                                        
                                                                                }
                                                                                break;

                                                                            }
                                                                }
                                                                else
                                                                {
                                                                            switch(con[i].value)
                                                                               {     
                                                                                   case "=":
                                                                                    if(this.ordata[j][this.sop[i]]==ck)
                                                                                    {
                                                                                        result.push(this.ordata[j]);
                                                                                        
                                                                                    }
                                                                                    break;

                                                                                    case "<":
                                                                                        if(this.ordata[j][this.sop[i]]<ck)
                                                                                        {
                                                                                            result.push(this.ordata[j]);
                                                                                            
                                                                                        }

                                                                                    break;

                                                                                    case ">":
                                                                                        if(this.ordata[j][this.sop[i]]>ck)
                                                                                        {
                                                                                            result.push(this.ordata[j]);
                                                                                            
                                                                                        }

                                                                                    break;
                                                                                }
                                                                }
                                                     
                                                }
                                        }
                                        else
                                        { 
                                            var newd=[];
                                            for(var j=0;j<result.length;j++)
                                              {
                                                ck=document.getElementById(this.sop[i]).value;
                                                if(typeof this.ordata[j][this.sop[i]]=="string")
                                                   {
                                                     
                                                            switch(con[i].value)
                                                                {
                                                                    case "=":
                                                                            if(result[j][this.sop[i]].trim().toLowerCase()==ck.toLowerCase())
                                                                            {
                                                                                    newd.push(result[j]);
                                                                            }
                                                                break;

                                                                case "<":
                                                                            if(result[j][this.sop[i]].trim().toLowerCase()<ck.toLowerCase())
                                                                            {
                                                                                newd.push(result[j]);
                                                                            }
                                                                break;

                                                                case ">":
                                                                            if(result[j][this.sop[i]].trim().toLowerCase()>ck.toLowerCase())
                                                                            {
                                                                                newd.push(result[j]);
                                                                            }
                                                                break;

                                                                }
                                                }
                                                else
                                                {
                                                    switch(con[i].value)
                                                    {
                                                        case "=":
                                                                if(result[j][this.sop[i]]==ck)
                                                                {
                                                                        newd.push(result[j]);
                                                                }
                                                    break;

                                                    case "<":
                                                                if(result[j][this.sop[i]]<ck)
                                                                {
                                                                    newd.push(result[j]);
                                                                }
                                                    break;

                                                    case ">":
                                                                if(result[j][this.sop[i]]>ck)
                                                                {
                                                                    newd.push(result[j]);
                                                                }
                                                    break;

                                                    }
                                                }
                                              }
                                              result=newd;
                                              
                                        }
                                        sig=true;
                                        filter.result=result;
                                        this.show();
                                } 
                              return false;      
                          
                         },
                         show:function ()
                             {
                                dis=document.getElementById("out");
                                dis.innerHTML=" ";
                                res="<br><table class=\"tab\"><tr>";
                                    for(k in this.col)
                                        {
                                            res+="<th>"+this.col[k]+"</th>";
                                        }
                                        res+="<th>Deletion</th></tr>";

                                for(var i=0;i<this.result.length;i++)
                                {   
                                      res+="<tr class=\"rnum\">";
                                      for(j in this.col)
                                       {
                                              res+="<td class=\"row\">"+this.result[i][this.col[j]]+"</td>";
                         
                                       }
                                       res+=
                                       "<td class=\"row\"><input class=\"btn btn-danger\" type=button value=\"remove\" onclick=\"filter.remove("+i+");\"</input></td></tr>";
                                }
                                res+="</table><br><br>";
                                dis.innerHTML=res;

                             },
                        remove:function(i)
                              {
                                   this.result.splice(i,1);
                                   this.show();
                              },
                        clsck:function()
                              {
                                  var a=0;
                                  filter.cls=[];
                                 // document.getElementById("test").innerHTML="1";
                                for(var i=0;i<filter.ordata.length;i++)
                                {
                                   // document.getElementById("test").innerHTML="2";
                                            //  ary[ind]=jsond[i]; 
                                              
                                              if(i==0)filter.cls.push(filter.ordata[i]["CLASS"]);
                                              else
                                                 {
                                                   // document.getElementById("test").innerHTML="3";
                                                     for(var j=0;j<filter.cls.length;j++)
                                                        {
                                                            if(filter.cls[j]==filter.ordata[i]["CLASS"])break;
                                                            else if(filter.cls[j]!=filter.ordata[i]["CLASS"] && j==filter.cls.length-1)
                                                                {
                                                                   // document.getElementById("test").innerHTML="4";
                                                                   filter.cls.push(filter.ordata[i]["CLASS"]);
                                                                  //document.getElementById("test").innerHTML="5";   
                                                                }
                                                        }
                                                 }
                                                 
                                        
                                          
                                     //document.getElementById("test").innerHTML=filter.cls.length;
                                }
                      
                              },
                              showcls:function()
                                 {
                                    var d=document.getElementById("cls");
                                    d.innerHTML="";
                                    d.innerHTML="<br><label for=\"csop\">Class : </label>";
                                   var sel=document.createElement("select");
                                    
                                       sel.setAttribute("id","csop");
                                       sel.setAttribute("class","form-control");
                                      sel.addEventListener("change",filter.clsval);
                                      
                                  var  op=document.createElement("option");
                                      op.setAttribute("value"," ");
                                   var   t=document.createTextNode("Please Select The Class");
                                      op.appendChild(t);
                                      sel.appendChild(op);
                                
                                   for(i in filter.cls)
                                   {
                                       op = document.createElement("option");
                                       op.setAttribute("value", filter.cls[i]);
                                       var t = document.createTextNode(filter.cls[i]);
                                           
                                       op.appendChild(t);
                                       sel.appendChild(op);
                               
                                   }
                                   d.appendChild(sel);
                                   this.nxt();
                                },

                             nxt:function()
                             {
                                 d=document.getElementById("semes");
                                           
                                   d.innerHTML=" <br><label for=\"sem\" Semester :</label> <select class=\"form-control\" id=\"sem\"><option value=\" \">Choose Sem</option>"+
                                     "<option value=1>Sem1</option><option value=2>Sem2</option>"+
                                     "<option value=3>Sem3</option><option value=4>Sem4</option>"+
                                     "<option value=5>Sem5</option><option value=6>Sem6</option></select>";
                                  
                                     var dis=document.getElementById("filter");
                                     dis.innerHTML="";
                                     dis.innerHTML="<br><label for=\"sop\">Select Column For Update</label><br>";
                                    var sele=document.createElement("select");
                                        sele.multiple=true;
                                        sele.setAttribute("id","sop");
                                        sele.setAttribute("class","form-control");
                                       sele.addEventListener('change',this.subcod);
                                    
        
                                    for(i in filter.col)
                                    {
                                    var opt = document.createElement("option");
                                        opt.setAttribute("value", filter.col[i]);
                                        var te = document.createTextNode(filter.col[i]);
                                            
                                        opt.appendChild(te);
                                        sele.appendChild(opt);
                                     }
                                     dis.appendChild(sele);  
                                 
                                 },
                                 clsval:function()
                                    { 
                                      

                                        //document.getElementById("test").innerHTML="asd";
                                         var res=[];
                                        v=document.getElementById("csop").value;
                                      
                                           for(var i=0;i<filter.ordata.length;i++)
                                              {
                                                    if(filter.ordata[i]["CLASS"]==v)
                                                       {
                                                        res.push(filter.ordata[i]);
                                                        
                                                       }
                                              }
                                              filter.result=res;
                                             filter.show();

                                              
                                             
                                    
                                    },
                                 subcod:function()
                                   {
                                    filter.sop=[];
                                    d=document.getElementById("outer");
                                    d.innerHTML=""; 
                                    var htm="<br><table align=\"center\">";
                                    sel=document.getElementById("sop");
                                    c=document.getElementById("csop").value;
                                    s=document.getElementById("sem").value;
                                       if(c==" ")d.innerHTML="<br><b><font color=red>Please Select Class</font></b>";
                                       else if(s==" ")d.innerHTML="<br><b><font color=red>Please Select Sem</font></b>";
                                       else{
        
                                                for(var i=0;i<sel.options.length;i++)
                                                   {
                                                       if(sel.options[i].selected==true)
                                                          {
                                                              filter.sop.push(sel.options[i].value);                                                        
                                                          }
                                                   }
        
                                                   for(i in filter.sop)
                                                     {
                                                          htm+="<tr><td><label aligh=center for=\""+filter.sop[i]+"\">"+filter.sop[i]+
                                                         "</label> :</td>"+
                                                         " <td><input class=\"form-control\" type=\"text\" placeholder=\"Subject Code\" id=\""+filter.sop[i]+"\"  onkeyup=\"toup(this)\"  align=center id=\""+filter.sop[i]+"\" required></input></td>"+
                                                         " <td> <input class=\"form-control con\" type=\"number\" min=\"1\"  placeholder=\"Enter Pass Mark\"></td></tr>";
                                                         //htm+=htm;
                                                     } 
                                                     htm+="<tr><td><br></td></tr><tr><td colspan=\"2\" align=right><input class=\"btn btn-success\" type=submit value=\"Upload\"  onclick=\"filter.valid()\"></td></tr></table><br>";
                                                     d.innerHTML=htm;   
                                                //    filter.show();
                                                     
                                       }
                                                
                                      
                                   },
                                   valid:function()
                                     {
                                               
                                           for(i in filter.sop)
                                             {
                                                 var sub=document.getElementById(filter.sop[i]);
                                                 var mrk=document.getElementsByClassName("con");
                                                 if((sub.value=="")||(mrk[i].value=="")){document.getElementById("out").innerHTML="<font color=red>please Fill All Field</font>";break;}
                                                if(i==filter.sop.length-1){//filter.show();
                                                    if(filter.lformat==12)filter.fstart();
                                                    if(filter.lformat==3)upmark(filter.result);
                                                    
                                                   
                                                }
                                             }
                                    
                                            
                                     },
                                     test:function()
                                       {
                                          // document.getElementById("test").innerHTML="kj";
                                       }
                            
                    }
                         

                         

       



       
       
                    // XL CONNEC
      function htmstud()
           {
   var dis=document.getElementById("main");
   var text="<center><label for=\"\">Student Details : </label><input class=\"btn btn-default\" type=\"file\" id=\"fileUpload\" accept=\"\.xls\,\.xlsx\"\/></center><div id=\"stud\"><center><br><div id=\"filter\"></div><br><div id=\"outer\"></div></center><center><div id=\"out\"></div></center></div>";
   //var t2="<div id=\"stud\"><div id=\"filter\"></div><div id=\"outer\"></div><div id=\"out\"></div></div>";
     dis.innerHTML=text;
     //dis.innerHTML+=t2;
  
                     
    document.getElementById("fileUpload").addEventListener("change",function(event)
    {
      //document.getElementById("stud").innerHTML="<div id=\"filter\"></div><div id=\"outer\"></div><div id=\"out\"></div>";
        selectedFile=event.target.files[0];
        if(selectedFile)
        {
             var fileReader=new FileReader();
              fileReader.onload=function(event)
                    {
                        var data=event.target.result;
                        var workbook=XLSX.read(data,{type:"binary"});
                    
                 workbook.SheetNames.forEach(sheet=>{
                     let rowObject=XLSX.utils.sheet_to_row_object_array(
                         workbook.Sheets[sheet]
                     );
                     let jsonObject=JSON.stringify(rowObject);
                     
                     xldata=JSON.parse(jsonObject);
                     var tdata=JSON.stringify(xldata[0]);
                     document.getElementById("fileUpload").type="hidden";
                     
                    
                     filter.format=["ADDRESS","ROLLNO","REGNO","STUDENTNAME","FATHERNAME","MOTHERNAME","DEPARTMENT","SECTION","EMAIL","PHONE","CLASS","BATCH","DOB"];
                     filter.lformat=13;
 
                     //  t='class';
                    
                   
                      if(filter.chkf(rowObject)==true)
                          {
                            filter.ordata=rowObject;
                             filter.result=filter.ordata;
                             filter.show();
                            
                             document.getElementById("fileUpload").type="hidden";
                            //document.getElementById("out").innerHTML=typeof k[0].PHONE;
                              

                             filter.htmdec();
                                 
                               

                          }
                          else
                            {
                                document.getElementById("main").innerHTML="<center><font color=red>Your File Must Have This Column<br></font></center><br> ";
                                for(i=0;i<filter.format.length;i++)
                                {
                                    j=0;
                                    for(j;j<filter.ercol.length;j++)
                                       {
                                           if(i==filter.ercol[j])break;
                                           
                                       }
                                       if(j==filter.ercol.length)
                                         {
                                             document.getElementById("main").innerHTML+="<center><font color=green>"+filter.format[i]+"</font></center><br>";
                                         }
                                }
                                
                            }
                     //readxl(xldata);
                    
                 });
        };
        fileReader.readAsBinaryString(selectedFile);
    }   
    });
}
   

     //mark

function htmmark()
{
var dis=document.getElementById("main");
var text="<center><label for=\"\">Student Marks : </label><input class=\"btn btn-default\" type=\"file\" id=\"fileUpload\" accept=\"\.xls\,\.xlsx\"\/></center><div id=\"stud\"><center><div id=\"cls\"></div><div id=\"semes\"></div><div id=\"filter\"></div></center><center><div id=\"outer\"></div></center><center><div id=\"out\"></div></center></div>";
//var t2="<div id=\"stud\"><div id=\"filter\"></div><div id=\"outer\"></div><div id=\"out\"></div></div>";
dis.innerHTML=text;
//dis.innerHTML+=t2;

          
document.getElementById("fileUpload").addEventListener("change",function(event)
{
   // document.getElementById("stud").innerHTML="";
   // document.getElementById("cls").innerHTML="";
//document.getElementById("main").innerHTML="";
selectedFile=event.target.files[0];
if(selectedFile)
{
  var fileReader=new FileReader();
   fileReader.onload=function(event)
         {
             var data=event.target.result;
             var workbook=XLSX.read(data,{type:"binary"});
         
      workbook.SheetNames.forEach(sheet=>{
          let rowObject=XLSX.utils.sheet_to_row_object_array(
              workbook.Sheets[sheet]
          );
          let jsonObject=JSON.stringify(rowObject);
          
          xldata=JSON.parse(jsonObject);
          var tdata=JSON.stringify(xldata[0]);
          
          
         
          filter.format=["ROLLNO","REGNO","CLASS"];
          filter.lformat=3;
          document.getElementById("fileUpload").type="hidden";
          //  t='class';
         
        
           if(filter.chkf(rowObject)==true)
               {
                 filter.ordata=rowObject;
                  filter.result=filter.ordata;
                  //filter.show();
                 filter.clsck();
                   filter.showcls();
                // document.getElementById("test").innerHTML=filter.ordata[1]["CLASS"];
                   

                 // filter.htmdec();
                      
                    

               }
               else
                 {
                    //document.getElementById("main").innerHTML="<center><font color=red>Your File Must Have This Column</font><font color=green> ["+filter.format+"]</font><center>";
                    document.getElementById("main").innerHTML="<center><font color=red>Your File Must Have This Column<br></font></center><br> ";
                                for(i=0;i<filter.format.length;i++)
                                {
                                    j=0;
                                    for(j;j<filter.ercol.length;j++)
                                       {
                                           if(i==filter.ercol[j])break;
                                           
                                       }
                                       if(j==filter.ercol.length)
                                         {
                                             document.getElementById("main").innerHTML+="<center><font color=green>"+filter.format[i]+"</font></center><br>";
                                         }
                              }
                 }
          //readxl(xldata);
         
      });
};
fileReader.readAsBinaryString(selectedFile);
}   
});
}

function htmpert()
       {
        var dis=document.getElementById("main");
        var text="<center><label for=\"\">Student Percentage : </label><input  class=\"btn btn-default\" type=\"file\" id=\"fileUpload\" accept=\"\.xls\,\.xlsx\"\/></center><div id=\"stud\"><center><div id=\"perbtn\"></div><div id=\"out\"></div></div></div>";
        //var t2="<div id=\"stud\"><div id=\"filter\"></div><div id=\"outer\"></div><div id=\"out\"></div></div>";
        dis.innerHTML=text;
        //dis.innerHTML+=t2;
        
                  
        document.getElementById("fileUpload").addEventListener("change",function(event)
        {
           // document.getElementById("stud").innerHTML="";
           // document.getElementById("cls").innerHTML="";
        //document.getElementById("main").innerHTML="";
        selectedFile=event.target.files[0];
        if(selectedFile)
        {
          var fileReader=new FileReader();
           fileReader.onload=function(event)
                 {
                     var data=event.target.result;
                     var workbook=XLSX.read(data,{type:"binary"});
                 
              workbook.SheetNames.forEach(sheet=>{
                  let rowObject=XLSX.utils.sheet_to_row_object_array(
                      workbook.Sheets[sheet]
                  );
                  let jsonObject=JSON.stringify(rowObject);
                  
                  xldata=JSON.parse(jsonObject);
                  var tdata=JSON.stringify(xldata[0]);
                  
                  
                 
                  filter.format=["Per12th","ROLLNO","Per10th","PerSem"];
                  filter.lformat=4;
                  document.getElementById("fileUpload").type="hidden";
                  //  t='class';
                 
                
                   if(filter.chkf(rowObject)==true)
                       {
                         filter.ordata=rowObject;
                          filter.result=filter.ordata;
                          //filter.show();
                         //filter.clsck();
                         document.getElementById("perbtn").innerHTML="<br><input class=\"btn btn-success\" value=\"Upload\" type=\"button\" onclick=\"uplper(filter.result)\"><br>"
                           filter.show();
                     //   document.getElementById("main").innerHTML="match";
                           
        
                         // filter.htmdec();
                              
                            
        
                       }
                       else
                         {
                           // document.getElementById("main").innerHTML="<center><font color=red>Your File Must Have This Column</font><font color=green> ["+filter.format+"]</font><center>";
                           document.getElementById("main").innerHTML="<center><font color=red>Your File Must Have This Column<br></font></center><br> ";
                                for(i=0;i<filter.format.length;i++)
                                {
                                    j=0;
                                    for(j;j<filter.ercol.length;j++)
                                       {
                                           if(i==filter.ercol[j])break;
                                           
                                       }
                                       if(j==filter.ercol.length)
                                         {
                                             document.getElementById("main").innerHTML+="<center><font color=green>"+filter.format[i]+"</font></center><br>";
                                         }
                              }
                        }
                  //readxl(xldata);
                 
              });
        };
        fileReader.readAsBinaryString(selectedFile);
        }   
        });

       }

    /*
    document.getElementById("uploadExcel").addEventListener("click",function()
    {
        if(selectedFile)
            {
                 var fileReader=new FileReader();
                  fileReader.onload=function(event)
                        {
                            var data=event.target.result;
                            var workbook=XLSX.read(data,{type:"binary"});
                        
                     workbook.SheetNames.forEach(sheet=>{
                         let rowObject=XLSX.utils.sheet_to_row_object_array(
                             workbook.Sheets[sheet]
                         );
                         let jsonObject=JSON.stringify(rowObject);
                         
                       //  document.getElementById("jsonData").innerHTML=jsonObject;
                         xldata=JSON.parse(jsonObject);
                         var tdata=JSON.stringify(xldata[0]);
                         
                         
                       // document.getElementById("filter").innerHTML=filter.chkf(rowObject);
                          
                         //  t='class';
                        
                       
                          if(filter.chkf(rowObject)==true)
                              {
                                filter.ordata=rowObject;
                                 filter.result=filter.ordata;
                                 filter.show();
                                
                                  
                                //document.getElementById("out").innerHTML=typeof k[0].PHONE;
                                  

                                 filter.htmdec();
                                     
                                   

                              }
                              else
                                {
                                    document.getElementById("filter").innerHTML="pattern not found";
                                }
                         //readxl(xldata);
                        
                     });
            };
            fileReader.readAsBinaryString(selectedFile);
    }
    });
   
    





                      
 function readxl(jsond)
     {
          
       for(var i=0;i<jsond.length;i++)
          {
                if(jsond[i].percentage>50)
                    {
                        ary[ind]=jsond[i]; 
                        
                        if(i==0)classes[0]=ary[ind].class;
                        else
                           {
                               for(var j=0;j<classes.length;j++)
                                  {
                                      if(classes[j]==ary[ind].class)break;
                                      else if(classes[j]!=ary[ind].class && j==classes.length-1)
                                          {
                                             classes.push(ary[ind].class);
                                             //document.getElementById("out").innerHTML=classes.length;   
                                          }
                                  }
                           }
                           
                        ind++;
                    }
             //  document.getElementById("out").innerHTML=jsond.length;
          }

       
        
           
    } */

function toup(val)
{
  str=val.value;
  val.value="";
  val.value+=str.toUpperCase();
}

    

               
    









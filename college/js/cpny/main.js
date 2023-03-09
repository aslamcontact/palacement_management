function crcpny()
  {
      document.getElementById("main").innerHTML="<center><div id=\"cpin\"></div><div id=\"perr\"></div><div id=\"lcpy\"></div></center>";
      document.getElementById("cpin").innerHTML="<table><tr><td><label for=\"cname\">Company Name : <label></td><td><input class=\"form-control\" type=\"text\" maxlength=\"20\" id=\"cname\"></td></tr><tr><td><br> </td></tr>"+
                                                "<tr><td><label for=\"des\">Description : <label></td><td><textarea class=\"form-control\" maxlength=\"450\"rows=\"5\" cols=\"30\"  id=\"des\"></textarea></td></tr><tr><td><br></td></tr>"+
                                                "<tr><td><label for=\"eli\">Eligible : <label></td><td><textarea class=\"form-control\" maxlength=\"450\" rows=\"5\" cols=\"30\"  id=\"eli\"></textarea></td></tr><tr><td><br></td></tr>"+
                                                "<tr><td><label for=\"idate\">Last Date : <label></td><td><input class=\"form-control\" type=\"date\" id=\"idate\"></td></tr><tr><td><br> </td></tr>"+

                                                "<tr><td><label for=\"p10\">10TH Percentage : <label></td><td><input class=\"form-control\" type=\"number\" id=\"p10\"></td></tr><tr><td><br></td></tr>"+
                                                 "<tr><td><label for=\"p12\">12TH Percentage : <label></td><td><input class=\"form-control\" type=\"number\" id=\"p12\"></td></tr><tr><td><br></td></tr>"+
                                                 "<tr><td><label for=\"psem\">Sem Percentage : <label></td><td><input class=\"form-control\" type=\"number\" id=\"psem\"></td></tr><tr><td><br></td></tr>"+
                                                " <tr><td><label for=\"arr\">Allowed Arrear : <label></td><td><input class=\"form-control\" type=\"number\" id=\"arr\"></td></tr><tr><td><br></td></tr>"+
                                                "<tr><td colspan=\"2\"><center><input class=\"btn btn-success\" value=\"Create Company\" type=\"button\" onclick=\"upcpy()\"></center></td></tr></table><br>";
  
        listcpy();                                           
  }
  function showapp()
    {
      document.getElementById("main").innerHTML="<center><div id=\"cpny\"></div><br><div id=\"filter\"></div><br><div id=\"ader\"></div><br><div id=\"pre\"></div><div id=\"out\"></div></center>";
     applicpy();
    }
    function tcap()
      {
            tval=document.getElementById("caption").value;
            tval = tval.replace(new RegExp('\r?\n','g'), '<br/>');

            
            document.getElementById("cap").innerHTML=tval;
      }
      function showedit()
         {
           document.getElementById("main").innerHTML="<center><div id=\"e\"></div><div id=\"err\"></div><div id=\"detail\"></div><br><div id=\"per\"></div><br><div id=\"mark\"></div><br><div id=\"out\"></div></center>";
           document.getElementById("detail").innerHTML="<br><table><tr><td><label for=\"roll\">Roll : </label></td><td align=\"right\"><input class=\"form-control\" type=\"text\" id=\"roll\"></td><td align=\"center\"><input class=\"btn btn-success\" type=\"button\" value=\"Search\" onclick=\"showdm()\"><td></tr><tr><td><br></td></tr>"+
                                                       "<tr><td><label for=\"opdetail\">Select Field</label> : </td><td><center><select class=\"form-control\" id=\"opdetail\">"+
                                                       "<option value=\"name\">Name</option>"+
                                                       "<option value=\"fname\">Father Name</option>"+
                                                       "<option value=\"mname\">Mother Name</option>"+
                                                       "<option value=\"dob\">DOB</option>"+
                                                       "<option value=\"contact\">Contact</option>"+
                                                       "<option value=\"email\">Email</option>"+
                                                       "<option value=\"class\">Class</option>"+
                                                       "<option value=\"dept\">Department</option>"+
                                                       "<option value=\"sec\">Section</option>"+
                                                       "<option value=\"reg\">Register No</option>"+
                                                       "<option value=\"address\">Address</option>"+
                                                       "<option value=\"batch\">Batch</option></select></center></td>"+
                                                       "<td align=\"right\"><input placeholder=\"New value\" class=\"form-control\" type=\"text\" id=\"ndetail\"></td></tr>"+
                                                       "<tr><td><br></td></tr><tr><td colspan=\"3\"><center><input class=\"btn btn-success\" type=\"button\" value=\"Update\" onclick=\"upsddata('updata')\"></center></td></tr><tr><td><br></td></tr>"+
                                                       //"<tr><td><label for=\"roll\">Roll : </label></td><td align=\"right\"><input type=\"text\" id=\"roll\"></td><td align=\"center\"><input type=\"button\" value=\"Search\" onclick=\"showdm()\"><td></tr><tr><td><br></td></tr>"+
                                                       "<tr><td><label for=\"opdetail\">Percentage For</label> : </td><td><center><select class=\"form-control\" id=\"opper\">"+
                                                       "<option value=\"10th\">10Th Percentae</option>"+
                                                       "<option value=\"12th\">12th Percentage</option>"+
                                                       "<option value=\"sem\">Sem Percentage</option>"+
                                                      
                                                          "</select></center></td>"+
                                                       "<td><input class=\"form-control\" placeholder=\"New Value\" type=\"text\" id=\"nper\"></td></tr>"+
                                                       "<tr><td><br></td></tr><tr><td colspan=\"3\"><center><input class=\"btn btn-success\" type=\"button\" value=\"Update\" onclick=\"upsddata('upper')\"></center></td></tr></table>";
          document.getElementById("mark").innerHTML="<table><tr><td><label for=\"subcode\">Subject Code : </label></td><td><input class=\"form-control\" placeholder=\"Sub Code\" type=\"text\" id=\"subcode\"></td></tr><tr><td><br></td></tr>"+
                                                    "<tr><td><label for=\"nmark\">New Mark : </label></td><td><input class=\"form-control\" placeholder=\"New Mark\" type=\"text\" id=\"nmark\"></td></tr><tr><td><br></td></tr>"+
                                                    "<tr><td><label for=\"pass\">Status : </label></td><td><select class=\"form-control\" id=\"pass\"><option value=\"P\">Cleared</option><option value=\"F\">reappear</option><option value=\"A\">Absent</option></select></td></tr><tr><td><br></td></tr>"+
                                                     "<tr><td colspan=\"2\" align=\"center\"><input class=\"btn btn-success\" type=\"button\" value=\"Update\" onclick=\"upsddata('upmark')\"></td></tr></table>";                                             
                                                       
                                                       

         }
     function showdel()
       {
         
         document.getElementById("main").innerHTML="<center><div id=\"err\"></div><br><div id=\"dmain\"></div><div id=\"out\"></div><div id=\"sbat\"></div></center>";
         document.getElementById("dmain").innerHTML="<table><tr><td><label for=\"cls\">Class:</label></td><td><input class=\"form-control\"  type=\"text\" id=\"cls\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td><label for=\"sec\">Section:</label</td><td><input class=\"form-control\" type=\"text\" id=\"sec\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td><label for=\"dept\">Department:</label></td><td><input class=\"form-control\" type=\"text\" id=\"dept\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td colspan=\"2\" align=\"center\"><input class=\"btn btn-danger\" type=\"button\" value=\"Delete Class\" onclick=\"studdel('delcls')\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td><label for=\"roll\">Roll No:</label></td><td><input class=\"form-control\" type=\"text\" id=\"roll\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td><label for=\"subcode\">Subject Code:</label></td><td><input class=\"form-control\" type=\"text\" id=\"subcode\"></td></tr><tr><td><br></td></tr>"+
         "<tr><td><label for=\"batch\">Batch :</label></td><td><input class=\"form-control\" type=\"text\" id=\"batch\"><td></tr><tr><td><br></td></tr>"+
         "<tr><td colspan=\"2\"><input class=\"btn btn-danger\" type=\"button\" value=\"Delete Roll\" onclick=\"studdel('delroll')\">     <input class=\"btn btn-danger\" type=\"button\" value=\"Delete SubJect\" onclick=\"studdel('delsub')\">   <input class=\"btn btn-danger\" type=\"button\" value=\"Delete Batch\" onclick=\"studdel('delbatch')\"></td></tr>"+
         "</table>";
         showbat();
       }
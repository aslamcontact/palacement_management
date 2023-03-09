<?php
session_start();
include "../../confi/phpcon.php";
$_SESSION['studlog']=null;
$_SESSION['roll']=null;
session_destroy();
echo $url."/placement/student/";



?>
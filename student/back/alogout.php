<?php
session_start();
$_SESSION['studlog']=null;
$_SESSION['roll']=null;
session_destroy();
echo "https://127.0.0.1/student/";



?>
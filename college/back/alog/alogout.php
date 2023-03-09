<?php
session_start();
include "../../../confi/phpcon.php";
$_SESSION['admlog']=null;
session_destroy();
echo $url."/placement/college/";



?>
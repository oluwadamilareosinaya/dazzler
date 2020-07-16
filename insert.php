<?php

$hostname = "us-cdbr-east-02.cleardb.com";
$username = "b32176e191c330";
$password = "2f0d4b44";
$db = "heroku_2257288dd8057a2";

$dbconnect=mysqli_connect($hostname,$username,$password,$db);

if($dbconnect->connect_error) {
    die("Database connection failed: " . $dbconnect->connect_error);
}

if(isset($_POST)) {
    $email=$_POST['email'];

    $query = "INSERT INTO `subscribers` (`email`) VALUES ('{$email}')";

    if (!mysqli_query($dbconnect, $query)) {
        die('An error occured.');
    } else {
        echo "Thank You!, We will be in touch. php";
    }
}

?>

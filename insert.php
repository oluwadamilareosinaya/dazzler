<?php
    $email = $_POST["email"];

    //database connection

    $conn = new mysqli('us-cdbr-east-02.cleardb.com','b32176e191c330','2f0d4b44','heroku_2557288dd8057a2');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into test_table(email) values(?)");
		$stmt->bind_param("s", $email);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
<?php
$to = "maggie_luhui@hotmail.com";
$subject = "Message From ResumePage";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$message = $_POST['message'];

// $body = "From: $name_field\n Email: $email_field\n Message:\n $message";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: ".$name_field. " <".$email_field.">\r\n";
ob_start();

$send = mail($to, $subject, $message, $headers);

if ($send){
    echo "Your message has been sent to Maggie!";
} else {
    echo "Opps! Something is wrong~";
}

?>

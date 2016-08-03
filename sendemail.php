<?php
     require_once 'Mail.php';
     function send_mail($recipient,$subject,$body){

            $host = "yourmailserver.net"; 
            $username = "you@yourmailserver.net";
            $password = "password";
            $port = 25; 

            $headers = array ('From' => "Your agent <noreply@yoursite.net>",
              'To' => $recipient,
              'Subject' => $subject
            );  

            $smtp = Mail::factory(
             'smtp',
              array ('host' => $host,
                'auth' => true,
                'port' => $port,
                'username' => $username,
                'password' => $password)
            );  
            $smtp->send($recipient, $headers, $body);
       }
/*
$to = "bluehyemaggie@gmail.com";
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
*/
?>
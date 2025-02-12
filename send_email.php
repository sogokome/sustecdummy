<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);

    $to = "sogokomechad@gmail.com"; // ここに送信先のEメールアドレスを入力してください
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nCompany: $company\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
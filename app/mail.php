<?php

$frm_name  = "Youname";
$recepient = "grebenik999@mail.ru";
$sitename  = "Tajem";
$subject   = "new message from site\"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["e-mail"]);
$subject = trim($_POST["subject"]);
$mess = trim($_POST["mess"]);

$message = "
form-name: $formname <br>
Name: $name <br>
E-mail: $email<br>
Message: $mess
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Haal formuliergegevens op
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $website = strip_tags(trim($_POST["website"]));
    $message = trim($_POST["comment"]);

    // Controleer of de verplichte velden zijn ingevuld
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Vul alle verplichte velden in en zorg voor een geldig e-mailadres.";
        exit;
    }

    // E-mail instellingen
    $recipient = "Mevlutberzan0231@hotmail.com";
    $subject = "Nieuw bericht van $name";
    
    // Bouw de e-mailinhoud
    $email_content = "Naam: $name\n";
    $email_content .= "E-mail: $email\n";
    if (!empty($website)) {
        $email_content .= "Website: $website\n";
    }
    $email_content .= "Bericht:\n$message\n";

    // Bouw de e-mail headers
    $email_headers = "Van: $name <$email>";

    // Verstuur de e-mail
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Bedankt! Je bericht is succesvol verzonden.";
    } else {
        http_response_code(500);
        echo "Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.";
    }
} else {
    http_response_code(403);
    echo "Er is een probleem met je inzending. Probeer het opnieuw.";
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

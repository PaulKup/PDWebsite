<?php
// Contact form email handler
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Validate email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Sanitize input
$name = htmlspecialchars($input['name']);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($input['phone']) ? htmlspecialchars($input['phone']) : 'Not provided';
$company = isset($input['company']) ? htmlspecialchars($input['company']) : 'Not provided';
$service = isset($input['service']) ? htmlspecialchars($input['service']) : 'Not specified';
$budget = isset($input['budget']) ? htmlspecialchars($input['budget']) : 'Not specified';
$message = htmlspecialchars($input['message']);
$newsletter = isset($input['newsletter']) && $input['newsletter'] === 'yes' ? 'Yes' : 'No';

// Email configuration
$to = 'pdwebdev.studio@gmail.com';
$subject = 'New Contact Form Submission - P&D Web Design';

// Build email content
$email_content = "
New contact form submission from P&D Web Design website:

Name: $name
Email: $email
Phone: $phone
Company: $company
Service Interested In: $service
Budget Range: $budget
Newsletter Subscription: $newsletter

Message:
$message

---
This email was sent from the contact form on your website.
";

// Email headers
$headers = [
    'From: noreply@pdwebdesign.com',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to, $subject, $email_content, implode("\r\n", $headers));

if ($mail_sent) {
    // Send confirmation email to customer
    $customer_subject = 'Thank you for contacting P&D Web Design';
    $customer_content = "
Dear $name,

Thank you for reaching out to P&D Web Design! We've received your message and will get back to you within 24 hours.

Here's a copy of your message:
$message

If you have any urgent questions, feel free to call us at (555) 123-4567.

Best regards,
The P&D Web Design Team
pdwebdev.studio@gmail.com
";

    mail($email, $customer_subject, $customer_content, implode("\r\n", $headers));

    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?> 
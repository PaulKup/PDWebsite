const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/contact', limiter);

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('.'));

// Email transporter configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, company, service, budget, message, newsletter } = req.body;

        // Validation
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Name and email are required'
            });
        }

        // If no message is provided, create a default one
        const finalMessage = message || 'Customer submitted contact form without additional details.';

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Create email content
        const emailContent = `
New Contact Form Submission - P&D Web Design

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Website: ${req.body.website || 'Not provided'}
Service Interested In: ${service || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Newsletter Subscription: ${newsletter === 'yes' ? 'Yes' : 'No'}

Message:
${finalMessage}

---
This email was sent from the contact form on your website.
        `;

        // Customer confirmation email
        const customerEmailContent = `
Dear ${name},

Thank you for reaching out to P&D Web Design! We've received your message and will get back to you within 24 hours.

Here's a copy of your message:
${finalMessage}

If you have any urgent questions, feel free to call us at (555) 123-4567.

Best regards,
The P&D Web Design Team
pdwebdev.studio@gmail.com
        `;

        const transporter = createTransporter();

        // Send email to P&D Web Design
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'pdwebdev.studio@gmail.com',
            subject: 'New Contact Form Submission - P&D Web Design',
            text: emailContent,
            html: emailContent.replace(/\n/g, '<br>')
        });

        // Send confirmation email to customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting P&D Web Design',
            text: customerEmailContent,
            html: customerEmailContent.replace(/\n/g, '<br>')
        });

        res.json({
            success: true,
            message: 'Thank you for your message! We\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            success: false,
            message: 'There was an error sending your message. Please try again or email us directly at pdwebdev.studio@gmail.com'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'P&D Web Design Backend'
    });
});

// Serve the main HTML files
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/services.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 P&D Web Design server running on port ${PORT}`);
    console.log(`📧 Email service configured for: ${process.env.EMAIL_USER}`);
    console.log(`🌐 Server URL: http://localhost:${PORT}`);
});

module.exports = app; 
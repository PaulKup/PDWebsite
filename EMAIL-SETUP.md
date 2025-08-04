# Email Setup Guide for P&D Web Design Contact Form

## 🚨 Current Status
The contact form is currently in "demo mode" - it will show success messages and log form data to the console, but won't actually send emails until you set up one of the email services below.

## 📧 Email Service Options

### Option 1: Formspree (Recommended - Easiest)
**Best for:** Static websites, no server setup required

1. **Sign up for Formspree**
   - Go to [https://formspree.io](https://formspree.io)
   - Create a free account
   - Verify your email address

2. **Create a new form**
   - Click "New Form"
   - Name it "P&D Web Design Contact"
   - Copy the form ID (looks like: `xrgjabrg`)

3. **Update the JavaScript**
   - Open `script.js`
   - Find the line: `const formspreeUrl = 'https://formspree.io/f/your-actual-form-id';`
   - Replace `your-actual-form-id` with your form ID
   - Uncomment the Formspree code block (remove the `/*` and `*/`)

4. **Test the form**
   - Submit a test message
   - Check your Formspree dashboard for the submission
   - Set up email notifications to `pdwebdev.studio@gmail.com`

### Option 2: EmailJS (Client-side)
**Best for:** When you want more control over email templates

1. **Sign up for EmailJS**
   - Go to [https://emailjs.com](https://emailjs.com)
   - Create a free account

2. **Set up Email Service**
   - Add your Gmail account as an email service
   - Create an email template for contact form submissions

3. **Update the HTML**
   - Add this line to the `<head>` section of all HTML files:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

4. **Update the JavaScript**
   - Open `script.js`
   - Find the EmailJS code block
   - Replace `your-service-id` and `your-template-id` with your actual IDs
   - Uncomment the EmailJS code block

### Option 3: Netlify Forms (If hosting on Netlify)
**Best for:** Websites hosted on Netlify

1. **Add Netlify attribute to form**
   - In `contact.html`, update the form tag:
   ```html
   <form class="contact-form" id="contactForm" data-netlify="true">
   ```

2. **Deploy to Netlify**
   - Upload your files to Netlify
   - Netlify will automatically detect and handle the form

3. **Set up email notifications**
   - In your Netlify dashboard, go to Forms
   - Set up email notifications to `pdwebdev.studio@gmail.com`

## 🔧 Quick Setup (Formspree - Recommended)

Here's the fastest way to get emails working:

1. **Go to Formspree**: https://formspree.io
2. **Sign up** and create a new form
3. **Copy your form ID**
4. **Edit `script.js`** and replace this line:
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/your-actual-form-id';
   ```
   With your actual form ID, like:
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/xrgjabrg';
   ```
5. **Remove the demo code** by deleting these lines:
   ```javascript
   // For now, simulate successful email sending
   console.log('Contact form submission:', data);
   await new Promise(resolve => setTimeout(resolve, 1000));
   return { success: true, message: 'Email sent successfully' };
   ```
6. **Uncomment the Formspree code** by removing the `/*` and `*/` around it

## 📋 What the Form Sends

When someone submits the contact form, you'll receive an email with:
- **Name**: Customer's full name
- **Email**: Customer's email address
- **Phone**: Customer's phone number (if provided)
- **Company**: Customer's company name (if provided)
- **Service**: What service they're interested in
- **Budget**: Their budget range
- **Message**: Their detailed message
- **Newsletter**: Whether they want to subscribe to your newsletter

## 🧪 Testing

After setup:
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (pdwebdev.studio@gmail.com)
4. You should receive the contact form submission

## 🆘 Troubleshooting

**Form not sending emails?**
- Check the browser console for errors
- Verify your form ID/credentials are correct
- Make sure you've uncommented the correct code block
- Test with a simple message first

**Getting spam?**
- Formspree and EmailJS have built-in spam protection
- You can add CAPTCHA if needed
- Monitor your submissions and block suspicious ones

## 📞 Need Help?

If you're having trouble setting up the email functionality, you can:
1. Check the browser console for specific error messages
2. Try the Formspree option first (it's the easiest)
3. Contact us for assistance with the setup

---

**Note**: The current setup will work immediately for testing (showing success messages), but you need to implement one of the email services above to actually receive the contact form submissions. 
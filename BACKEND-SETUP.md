# Backend Setup Guide - P&D Web Design

## 🚀 Node.js/Express Backend with Email Functionality

This guide will help you set up the Express backend server to handle contact form submissions and send emails.

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Gmail account** (for sending emails)

## 🛠 Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Gmail App Password

**Important**: You need to create an "App Password" for your Gmail account, not your regular password.

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Go to Google Account Settings** → Security
3. **Find "App passwords"** under 2-Step Verification
4. **Generate a new app password** for "Mail"
5. **Copy the 16-character password**

### 3. Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp env.example .env
   ```

2. **Edit `.env` file:**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   PORT=3000
   ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:5500
   ```

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## 📧 Email Configuration

### Gmail Setup
- **From email**: Your Gmail address
- **To email**: `pdwebdev.studio@gmail.com`
- **Customer confirmation**: Sent to the customer's email

### Email Content
The server sends two emails:
1. **To P&D Web Design**: Complete form submission details
2. **To Customer**: Confirmation with their message copy

## 🔧 Server Features

### Security
- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate limiting**: 5 requests per 15 minutes per IP
- **Input validation**: Email format and required fields

### API Endpoints
- `POST /api/contact` - Contact form submission
- `GET /api/health` - Server health check
- `GET /` - Home page
- `GET /contact` - Contact page
- `GET /services` - Services page
- `GET /about` - About page

### Static File Serving
The server automatically serves your HTML, CSS, and JavaScript files.

## 🧪 Testing

### 1. Test the Server
```bash
curl http://localhost:3000/api/health
```

### 2. Test the Contact Form
1. Open `http://localhost:3000/contact`
2. Fill out the form
3. Submit and check your email

### 3. Test Email Sending
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🚀 Deployment Options

### Option 1: Heroku
1. **Create Heroku app**
2. **Set environment variables** in Heroku dashboard
3. **Deploy:**
   ```bash
   git push heroku main
   ```

### Option 2: Railway
1. **Connect GitHub repository**
2. **Set environment variables**
3. **Automatic deployment**

### Option 3: DigitalOcean App Platform
1. **Connect GitHub repository**
2. **Configure environment variables**
3. **Deploy with one click**

### Option 4: VPS (DigitalOcean, AWS, etc.)
1. **SSH into your server**
2. **Clone repository**
3. **Install Node.js and PM2**
4. **Set up environment variables**
5. **Start with PM2:**
   ```bash
   pm2 start server.js --name "pd-web-design"
   ```

## 🔍 Troubleshooting

### Common Issues

**"Invalid login" error:**
- Make sure you're using an App Password, not your regular Gmail password
- Enable 2-Factor Authentication on your Gmail account

**"Connection refused" error:**
- Check if the server is running on the correct port
- Verify firewall settings

**CORS errors:**
- Update `ALLOWED_ORIGINS` in your `.env` file
- Include your domain in the allowed origins

**Rate limiting:**
- The server limits to 5 requests per 15 minutes per IP
- This prevents spam and abuse

### Debug Mode
Add this to your `.env` file for detailed logging:
```env
NODE_ENV=development
DEBUG=*
```

## 📊 Monitoring

### Health Check
Monitor your server health:
```bash
curl http://your-domain.com/api/health
```

### Logs
Check server logs for errors:
```bash
# If using PM2
pm2 logs pd-web-design

# If running directly
npm run dev
```

## 🔒 Security Best Practices

1. **Never commit `.env` file** to Git
2. **Use strong app passwords**
3. **Keep dependencies updated**
4. **Monitor server logs**
5. **Set up SSL/HTTPS in production**

## 📞 Support

If you encounter issues:
1. Check the server logs
2. Verify your Gmail app password
3. Test with the health check endpoint
4. Ensure all environment variables are set

---

**Your Express backend is now ready to handle contact form submissions and send professional emails!** 🎉 
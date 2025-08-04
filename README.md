# PD Web Design - Professional Website

A modern, responsive website for PD Web Design, featuring a clean and elegant design with comprehensive functionality.

## 🌟 Features

### Pages
- **Home Page** (`index.html`) - Landing page with hero section, features, and prominent contact links
- **Services Page** (`services.html`) - Detailed service offerings with pricing plans
- **About Us Page** (`about.html`) - Company story, values, team, and statistics
- **Contact Page** (`contact.html`) - Contact form and company information

### Design Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Navigation** - Fixed navigation bar with mobile hamburger menu
- **Interactive Elements** - Hover effects, scroll animations, and form validation
- **Accessibility** - Semantic HTML and keyboard navigation support

### Technical Features
- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Mobile-First Approach** - Optimized for all screen sizes
- **Performance Optimized** - Fast loading with minimal dependencies
- **Cross-Browser Compatible** - Works on all modern browsers
- **SEO Friendly** - Proper meta tags and semantic structure

## 📁 File Structure

```
website/
├── index.html          # Home page
├── services.html       # Services page
├── about.html          # About us page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** through the pages using the navigation menu

### Local Development
- Simply open any HTML file in your browser
- No build process or server required
- All files are self-contained

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` - Used for buttons, links, and accents
- **Dark Blue**: `#1d4ed8` - Hover states
- **Dark Gray**: `#1e293b` - Headings and text
- **Light Gray**: `#64748b` - Secondary text
- **Background**: `#f8fafc` - Light backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Components
- **Buttons**: Primary, secondary, and large variants
- **Cards**: Feature cards, service cards, pricing cards
- **Forms**: Contact form with validation
- **Navigation**: Fixed header with mobile menu

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1d4ed8;
    --text-color: #1e293b;
    --text-secondary: #64748b;
}
```

### Adding Pages
1. Create a new HTML file
2. Copy the navigation structure from existing pages
3. Update the navigation links
4. Add your content following the existing patterns

### Modifying Content
- **Company Information**: Update text content in HTML files
- **Contact Details**: Modify contact information in footer and contact page
- **Services**: Edit service offerings in `services.html`
- **Team**: Update team member information in `about.html`

## 📧 Contact Form

The contact form includes:
- **Form Validation** - Client-side validation for required fields
- **Email Validation** - Proper email format checking
- **Success/Error Messages** - User feedback notifications
- **Responsive Design** - Works on all devices
- **Email Sending** - Sends emails to pdwebdev.studio@gmail.com

### Email Setup Options:

#### Option 1: PHP Backend (Recommended)
1. Upload `send-email.php` to your server
2. Ensure PHP mail() function is enabled
3. The form will automatically send emails to pdwebdev.studio@gmail.com

#### Option 2: Formspree (No Server Required)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `your-form-id` in the contact form action
4. Update the JavaScript with your form endpoint

#### Option 3: EmailJS (Client-side)
1. Sign up at [EmailJS.com](https://emailjs.com)
2. Set up your email service and template
3. Replace the service and template IDs in the JavaScript
4. Add the EmailJS SDK to your HTML

The contact form is fully functional and will send all submissions to pdwebdev.studio@gmail.com with proper validation and error handling.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lightweight**: Minimal file sizes
- **Fast Loading**: Optimized images and code
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Efficient JavaScript**: Event delegation and optimized selectors

## 🔒 Security

- **No External Dependencies** - Reduces attack surface
- **Form Validation** - Prevents malicious input
- **XSS Protection** - Proper HTML escaping
- **HTTPS Ready** - Works with SSL certificates

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@pdwebdesign.com
- Phone: (555) 123-4567

---

**Built with ❤️ by PD Web Design** 
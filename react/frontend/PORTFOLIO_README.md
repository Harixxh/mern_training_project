# 🌟 Harish's Portfolio Website

A modern, animated portfolio website built with React.js and Framer Motion.

## ✨ Features

### 1. **Home Section**
- Eye-catching hero section with animated introduction
- Profile image with hover effects
- Social media links (GitHub, LeetCode, LinkedIn)
- Smooth fade-in and slide animations

### 2. **About Section**
- Detailed introduction
- Professional profile image
- Animated text and images on scroll

### 3. **Skills Section**
- Interactive skill cards with animated progress bars
- Skills include: HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Git
- Hover effects on each skill card
- Progress bars animate when scrolled into view

### 4. **Projects Section**
- 6 featured projects with descriptions
- Technologies used for each project
- GitHub and Live Demo links
- Animated project cards with hover effects
- Icon animations on hover

### 5. **Contact Section**
- Contact information (Email, Phone, Location)
- Working contact form with validation
- Social media links with rotation animations
- Form inputs with focus effects

## 🎨 Animations

All sections feature smooth animations powered by **Framer Motion**:
- Fade-in effects
- Slide animations (left, right, up, down)
- Scale and rotation on hover
- Staggered animations for lists
- Scroll-triggered animations

## 🚀 Technologies Used

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling
- **Vite** - Build tool

## 📱 Responsive Design

The portfolio is fully responsive and works perfectly on:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

## 🎯 How to Use

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Customization Guide

### Update Personal Information

1. **Home Section** (`home.jsx`):
   - Change name in `<h2 className="heading">YOUR NAME</h2>`
   - Update intro text in subheading and paragraph
   - Replace social media links

2. **About Section** (`home.jsx`):
   - Edit the about me paragraph
   - Update your story

3. **Skills Section** (`pages/Skills.jsx`):
   - Modify the skills array with your skills
   - Adjust skill levels (0-100%)
   - Change colors for each skill

4. **Projects Section** (`pages/Projects.jsx`):
   - Update project details in the projects array
   - Add your GitHub and live demo links
   - Change project emojis/icons

5. **Contact Section** (`pages/Contact.jsx`):
   - Update email, phone, and location
   - Modify social media links
   - Connect form to your backend/email service

### Change Colors

Main colors used:
- Primary: `rgb(100, 173, 251)` - Blue
- Background: `rgb(2, 2, 21)` - Dark Blue
- Text: `white` / `rgba(255, 255, 255, 0.8)`

Find and replace these values in CSS files to match your brand colors.

### Add New Sections

1. Create a new component in `pages` folder
2. Import and add to `App.jsx`
3. Add navigation link in `home.jsx`

## 🎨 Animation Customization

### Change Animation Duration
```jsx
transition={{ duration: 0.8 }} // Change 0.8 to your desired seconds
```

### Change Animation Type
```jsx
initial={{ opacity: 0, y: 50 }}  // Start state
whileInView={{ opacity: 1, y: 0 }} // End state
```

### Disable Animations
Remove `motion` wrapper and use regular HTML elements.

## 📂 Project Structure

```
src/
├── pages/
│   ├── Skills.jsx         # Skills section
│   ├── Skills.css
│   ├── Projects.jsx       # Projects section
│   ├── Projects.css
│   ├── Contact.jsx        # Contact section
│   └── Contact.css
├── components/
│   ├── Navbar.jsx         # Navigation component
│   └── Navbar.css
├── assest/
│   └── harish.jpg         # Profile image
├── home.jsx               # Home & About sections
├── home.css
├── App.jsx                # Main app component
└── App.css

```

## 🔗 Links to Update

Replace these placeholder links with your actual profiles:
- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`
- LeetCode: `https://leetcode.com/YOUR_USERNAME`
- Twitter: `https://twitter.com/YOUR_HANDLE`

## 💡 Tips

1. **Images**: Replace `harish.jpg` with your photo in the `assest` folder
2. **SEO**: Update title and meta tags in `index.html`
3. **Favicon**: Add your favicon in `public` folder
4. **Performance**: Optimize images before adding them
5. **Testing**: Test on multiple devices and browsers

## 🐛 Troubleshooting

### Animations not working?
- Check if framer-motion is installed: `npm install framer-motion`
- Ensure imports are correct

### Images not showing?
- Verify image path is correct
- Check if image exists in `assest` folder

### Smooth scroll not working?
- Ensure `scroll-behavior: smooth` is in CSS
- Check if section IDs match navigation links

## 📧 Contact Form Backend

The contact form currently shows an alert. To make it functional:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

### Option 2: Your Own Backend
Create API endpoint and update handleSubmit function.

### Option 3: Formspree
Use Formspree action URL in form.

## 🎉 Deployment

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 📄 License

Feel free to use this portfolio template for your personal use!

## 🙏 Credits

- Animations: Framer Motion
- Icons: React Icons
- Built by: Harish

---

**Made with ❤️ and React**

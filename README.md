# Online Quiz - Pure HTML, CSS, and JavaScript Version

This directory contains the complete Online Quiz website converted to pure HTML, CSS, and JavaScript (no React, no build tools required).

## 📁 File Structure

```
public/
├── index.html          # Home page
├── quiz.html           # Quiz page
├── result.html         # Quiz results page
├── about.html          # About us page
├── contact.html        # Contact page
├── terms.html          # Terms & Privacy page
├── 404.html            # 404 error page
├── styles.css          # Main stylesheet
├── quiz-data.js        # Quiz questions and data
├── common.js           # Header, footer, and utilities
├── home.js             # Home page logic
├── quiz.js             # Quiz page logic
├── result.js           # Result page logic
├── contact.js          # Contact form logic
└── README.md           # This file
```

## 🚀 How to Use

### Option 1: Open Directly in Browser
Simply open `index.html` in any modern web browser. You can navigate through all pages using the links.

### Option 2: Use a Local Server (Recommended)
For better experience and to avoid any CORS issues with localStorage:

**Using Python:**
```bash
cd public
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

**Using Node.js (http-server):**
```bash
npm install -g http-server
cd public
http-server -p 8000
```
Then open http://localhost:8000 in your browser.

**Using PHP:**
```bash
cd public
php -S localhost:8000
```
Then open http://localhost:8000 in your browser.

### Option 3: Deploy to Any Web Host
Upload all files in the `public` folder to any web hosting service (GitHub Pages, Netlify, Vercel, etc.). No build step required!

## 🎯 Features

- **6 Quiz Categories**: General Knowledge, Science, History, Sports, Movies & TV, Technology
- **10 Questions per Quiz**: Each quiz contains 10 carefully crafted questions
- **Timer Functionality**: Each question has a time limit
- **Instant Feedback**: Get immediate explanations for correct/incorrect answers
- **Score Tracking**: View your performance with detailed statistics
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed

## 📱 Pages Overview

### 1. Home Page (`index.html`)
- Hero section with call-to-action
- Quiz categories grid
- Featured quizzes
- "Why Play Online Quiz?" section
- CTA section

### 2. Quiz Page (`quiz.html`)
- Question display with timer
- Multiple choice answers
- Progress indicator
- Navigation buttons (Previous/Next)
- Instant feedback with explanations
- Auto-advance on timer expiration

### 3. Result Page (`result.html`)
- Performance summary with emoji
- Score percentage display
- Statistics (total, correct, incorrect)
- Action buttons (Retry, Home, More Quizzes, Share)
- Question-by-question summary
- Share functionality

### 4. About Page (`about.html`)
- Mission statement
- What we offer
- Our commitment
- Call-to-action

### 5. Contact Page (`contact.html`)
- Contact information (email, phone, hours)
- Contact form
- Success message on submission
- CTA section

### 6. Terms & Privacy Page (`terms.html`)
- Terms of Service
- Privacy Policy
- Contact section
- Last updated date

### 7. 404 Page (`404.html`)
- Friendly error message
- Navigation links to home and categories

## 🎨 Customization

### Adding New Quizzes

Edit `quiz-data.js` and add a new quiz object to the `quizzes` array:

```javascript
{
  id: 'your-quiz-id',
  title: 'Your Quiz Title',
  category: 'category-id',
  description: 'Quiz description',
  difficulty: 'Easy', // Easy, Medium, or Hard
  timePerQuestion: 30, // seconds
  questions: [
    {
      id: 1,
      question: 'Your question?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 0, // index of correct answer (0-3)
      explanation: 'Explanation of the correct answer'
    }
    // ... more questions
  ]
}
```

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
  --color-blue-600: #2563eb;
  --color-purple-600: #9333ea;
  /* ... other colors */
}
```

### Modifying Contact Details

Update the contact information in:
- `common.js` (footer)
- `contact.html` (contact page)
- `terms.html` (contact section)

Current contact details:
- Email: quiz@playquiz.in
- Phone: +1-362-883-9930

## 🌐 Browser Compatibility

This website works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📊 Data Storage

The website uses `localStorage` to store:
- Quiz results (temporary, for the result page)

No personal data is stored permanently. All quiz state is cleared when navigating away from the result page.

## 🔒 Privacy & Security

- No external dependencies or CDNs (except for icons mentioned in comments)
- No tracking scripts
- No cookies
- All data processing happens client-side
- Contact form submission is simulated (no actual data transmission)

## 💡 Tips

1. **Testing Quizzes**: Try different quizzes by changing the `?id=` parameter in the URL (e.g., `quiz.html?id=science-1`)

2. **Resetting Quiz Progress**: Simply refresh the page to restart a quiz

3. **Sharing Scores**: Use the "Share Score" button on the result page to copy your score to clipboard

4. **Mobile Testing**: Test on actual mobile devices or use browser dev tools to ensure responsive design works properly

## 📄 License

This code is provided as-is for educational and commercial use.

## 🤝 Support

For questions or issues, contact:
- Email: quiz@playquiz.in
- Phone: +1-362-883-9930

---

**Last Updated**: February 9, 2026

Made with ❤️ for learners worldwide

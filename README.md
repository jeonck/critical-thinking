# Critical Thinking Framework

A modern, responsive web application designed to guide users through a structured critical thinking process. The application presents a 7-step framework for systematic problem-solving and analysis, with a focus on Korean language content (though the framework itself is universally applicable).

## 🚀 Features

- **7-step critical thinking process**: Systematic approach to problem-solving
- **Progress tracking**: Visual progress bar and step indicators
- **Auto-saving**: All responses are saved automatically
- **Summary view**: Consolidated view of all inputs at the end
- **Responsive design**: Optimized for mobile, tablet, and desktop
- **Dark mode support**: Automatic switching based on system preferences
- **Touch-friendly**: Optimized for mobile devices with touch support
- **Modern UI**: Clean, intuitive interface with smooth transitions

## 🧩 The 7-Step Framework

1. **🎯 문제정의** (Problem Definition) - Defining the problem clearly
2. **📊 정보수집** (Information Gathering) - Collecting relevant information
3. **🤔 가정인식** (Assumption Recognition) - Identifying unconscious assumptions
4. **👥 다양한관점** (Multiple Perspectives) - Considering different viewpoints
5. **⚖️ 논증평가** (Argument Evaluation) - Assessing logical arguments
6. **💡 결론도출** (Conclusion Drawing) - Drawing reasoned conclusions
7. **🚀 행동계획** (Action Planning) - Creating concrete action plans

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (ES6+)
- Responsive design principles
- Modern CSS features (backdrop-filter, animations)

## 📦 File Structure

```
critical-thinking/
├── index.html          # Main application file
├── style.css           # Custom styles and responsive enhancements
├── script.js           # JavaScript functionality and logic
├── README.md           # This documentation file
├── QWEN.md             # Project context and instructions
└── .gitignore          # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Optional: A local web server for development

### Running the Application

#### Option 1: Direct Browser Open
1. Open `index.html` directly in your web browser
2. The application will load and be fully functional

#### Option 2: Local Development Server
If you prefer to run with a local server (recommended for development):

Using Python:
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Using Node.js:
```bash
# Install a simple server globally
npm install -g http-server

# Navigate to the project directory and run
http-server

# Then open the provided URL in your browser
```

## 🎨 Customization

The application can be easily customized:

- **Text content**: Modify labels and instructions in `index.html`
- **Color scheme**: Update Tailwind configuration in `index.html` or CSS variables in `style.css`
- **Steps**: Modify the number of steps or framework structure in both `index.html` and `script.js`
- **Validation**: Add validation requirements for each input field in `script.js`

## 📱 Mobile Responsiveness

The application features a mobile-first responsive design:

- Optimized layouts for all screen sizes
- Touch-friendly controls and targets
- Adaptive text sizing
- Flexible grid layouts for step indicators

## 🔧 Development

### Adding New Steps
1. Update the HTML structure with a new step content div
2. Add the corresponding step indicator
3. Update the JavaScript class constants
4. Add the new step to the summary generator

### Styling
- Custom styles are in `style.css`
- Tailwind CSS for utility classes
- Modern CSS features like backdrop-filter and smooth transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is available for personal and commercial use. 

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

## 🙏 Acknowledgments

- Tailwind CSS for the styling framework
- Modern JavaScript practices for the interactive functionality
- Responsive design principles for cross-device compatibility
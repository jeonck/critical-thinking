# Critical Thinking Framework

## Project Overview

This is a single-page web application designed to guide users through a structured critical thinking process. The application presents a 7-step framework for systematic problem-solving and analysis, with a focus on Korean language content (though the framework itself is universally applicable).

The application uses a step-by-step approach to help users analyze problems thoroughly:

1. **문제정의** (Problem Definition) - Defining the problem clearly
2. **정보수집** (Information Gathering) - Collecting relevant information
3. **가정인식** (Assumption Recognition) - Identifying unconscious assumptions
4. **다양한관점** (Multiple Perspectives) - Considering different viewpoints
5. **논증평가** (Argument Evaluation) - Assessing logical arguments
6. **결론도출** (Conclusion Drawing) - Drawing reasoned conclusions
7. **행동계획** (Action Planning) - Creating concrete action plans

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (ES6+)
- Responsive design principles
- Dark mode support (based on system preferences)

## Features

- Step-by-step guided workflow
- Progress tracking and visualization
- Auto-saving of user responses
- Summary view at the end of the process
- Dark/light mode support
- Fully responsive design with mobile-first approach
- Touch support for mobile devices
- Modern UI elements with enhanced animations and transitions
- Improved accessibility with better focus management
- Confirmation dialog for reset functionality
- Korean language interface with English framework concepts

## Building and Running

This is a static HTML application that can be run directly in a browser:

1. Open `index.html` in any modern web browser
2. Or serve it via a local web server (recommended for proper functionality)

The VS Code settings suggest using Live Server extension on port 5501 for development:

```bash
# If using VS Code with Live Server extension:
# Right-click on index.html and select "Open with Live Server"
```

Or using Python's built-in server:
```bash
python -m http.server 8000
```

## Development Structure

The application has been refactored and enhanced to separate concerns into multiple files:

- **HTML Structure** (`index.html`): Contains the 7-step form with text areas for user input, optimized with responsive classes
- **CSS Styling** (`style.css`): Custom CSS for animations, modern UI elements, and responsive design
- **Tailwind CSS**: Provides styling with a custom color palette (primary: #5D5CDE) via CDN
- **JavaScript Functionality** (`script.js`): `CriticalThinkingApp` class manages state, navigation, UI updates, and touch interactions
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes

## Key Components

### Core Logic
- `CriticalThinkingApp` class manages the application state
- Tracks current step and stores user responses
- Handles navigation between steps
- Generates summary view from collected responses

### UI Features
- Animated progress bar
- Interactive step indicators
- Auto-save functionality for all text inputs
- Responsive navigation controls
- Confirmation for destructive actions (reset)
- Summary view with "Go back to last step" functionality
- Proper navigation flow between summary and final step

## File Structure
```
critical-thinking/
├── index.html - Main application file
├── style.css - Styles for the application
├── script.js - JavaScript functionality
├── .vscode/settings.json - Development settings
└── QWEN.md - This documentation file
```

## Customization

The application can be easily customized by modifying:

- Text content and labels (currently in Korean)
- Color scheme via Tailwind configuration
- Number of steps or framework structure
- Validation requirements for each step

## Potential Enhancements

- Export functionality for completed analyses
- Multiple language support
- Local storage persistence for responses
- Advanced validation for each step
- Analytics integration to track usage patterns

This application follows a client-side MVC pattern with the CriticalThinkingApp class serving as the central controller managing model data (responses) and view updates (UI state).
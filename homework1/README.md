# Tech Glossary

A minimal static web application displaying a collection of technology terms and definitions.

## Features

- Clean, modern UI using Tailwind CSS
- Semantic HTML structure
- Responsive design
- Easy to extend with new glossary entries

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Custom CSS (minimal, Tailwind used via CDN)
├── glossary.js         # JavaScript for rendering glossary entries
├── glossary.test.js    # Unit tests for glossary filtering
├── package.json        # npm configuration and dependencies
├── .gitignore         # Git ignore file
└── README.md           # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required - it's a pure static site!

### Development Setup

If you want to run tests:

```bash
npm install
npm test
```

## Adding New Entries

To add new glossary entries, edit the `glossaryEntries` array in `glossary.js`:

```javascript
{
    term: "Your Term",
    description: "Your description here",
    tags: ["tag1", "tag2"]
}
```

## Testing

This project uses [Vitest](https://vitest.dev/) for unit testing.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run
```

### Test Coverage

The test suite covers the glossary filtering functionality, including:
- Empty query handling
- Case-insensitive term matching
- Description keyword matching
- Tag-based filtering
- No results handling
- Whitespace trimming
- Partial term matching

## Technologies Used

- HTML5 (semantic elements)
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6+)
- Vitest (for testing)

## Browser Support

Works in all modern browsers that support ES6 JavaScript.


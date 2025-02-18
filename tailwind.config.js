```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#abcdef',
      }
    }
  },
  plugins: [],
};
```
This configuration only includes `./index.html` and `./src/**/*.{js,jsx,ts,tsx}` in the `content` array.  If you have Tailwind directives in other files (e.g., `./public/*.html` or other folders), they won't be processed and you'll encounter unexpected styling issues.
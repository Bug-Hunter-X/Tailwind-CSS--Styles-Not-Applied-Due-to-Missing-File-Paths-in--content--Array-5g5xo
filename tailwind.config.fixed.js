```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}',
    './public/*.html',
    '../components/**/*.{js,jsx,ts,tsx}' //Add any other files
  ],
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
This revised configuration includes `'./public/*.html'` and other potential locations containing Tailwind directives.  Using glob patterns like `**/*.{js,jsx,ts,tsx}` ensures that files within subdirectories are also processed.
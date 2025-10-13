const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const asciidoctor = require('@asciidoctor/core')();

// Get the input file from command line arguments
const inputFile = process.argv[2];

if (!inputFile) {
    console.error('❌ Error: Please provide an input file');
    console.log('Usage: node convert-adoc.js <input-file.adoc>');
    console.log('Example: node convert-adoc.js fraud-detection.adoc');
    process.exit(1);
}

// Check if the input file exists
if (!fs.existsSync(inputFile)) {
    console.error(`❌ Error: File '${inputFile}' not found`);
    process.exit(1);
}

// Read the AsciiDoc file
const adocContent = fs.readFileSync(inputFile, 'utf8');

// Parse the AsciiDoc content using AsciiDoctor
const file = asciidoctor.load(adocContent);
const html = file.convert();

// Create a DOM environment from the converted HTML
const jsdom = new JSDOM(html.toString());
const document = jsdom.window.document;

// Get the body content from the parsed HTML
const htmlContent = document.body.innerHTML;

// Create a complete HTML document
const fullHtml = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fraud Detection Documentation</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                color: #333;
            }
            h1, h2, h3, h4, h5, h6 {
                color: #2c3e50;
                margin-top: 2em;
                margin-bottom: 1em;
            }
            h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; }
            h2 { border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; }
            p { margin-bottom: 1em; }
            ul { margin-bottom: 1em; }
            li { margin-bottom: 0.5em; }
            img { 
                display: block; 
                margin: 20px auto; 
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            hr { 
                border: none; 
                border-top: 2px solid #ecf0f1; 
                margin: 2em 0; 
            }
            a { 
                color: #3498db; 
                text-decoration: none; 
            }
            a:hover { 
                text-decoration: underline; 
            }
            strong { 
                color: #2c3e50; 
            }
        </style>
    </head>
    <body>
        ${htmlContent}
    </body>
</html>`;

// Create output directory if it doesn't exist
const outputDir = 'output';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created output directory: ${outputDir}`);
}

// Generate output filename
const outputFile = path.join(outputDir, path.basename(inputFile, path.extname(inputFile)) + '.html');

// Write the HTML file
fs.writeFileSync(outputFile, fullHtml);

console.log(`✅ Successfully converted ${inputFile} to ${outputFile}`);
console.log(`📄 Output file: ${outputFile}`);

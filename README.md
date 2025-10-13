# Sample Applications

This repository contains AsciiDoc files and image assets of the Sample Application details.

## Overview

The project includes:
- **AsciiDoc**: Ascii Docs of Sample Applications detail page
- **AsciiDoc to HTML Converter**: A Node.js script that converts `.adoc` files to styled HTML documents
- **Styled Output**: The converter generates HTML with modern, responsive styling

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/neo4j-product-examples/sample-applications.git
cd sample-applications
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Convert AsciiDoc to HTML

Run the converter script with an AsciiDoc file:

```bash
# Using npm script
npm run convert fraud-detection.adoc

# Or directly with node
node convert-adoc.js fraud-detection.adoc
```

### Example

To convert the included fraud detection documentation:

```bash
npm run convert fraud-detection.adoc
```

This will:
1. Read the `fraud-detection.adoc` file
2. Convert it to HTML using AsciiDoctor
3. Apply custom styling
4. Save the output to `output/fraud-detection.html`

## Project Structure

```
sample-applications/
├── assets/                          # Image assets for documentation
│   ├── fraud-detection-graph-model.png
│   └── fraud-detection-overview.jpg
├── output/                          # Generated HTML files
│   └── fraud-detection.html
├── convert-adoc.js                  # Main conversion script
├── fraud-detection.adoc            # Example AsciiDoc documentation
├── package.json                    # Node.js dependencies and scripts
└── README.md                       # This file
```

## Script Options

The `convert-adoc.js` script accepts the following:

- **Input file**: AsciiDoc file to convert (required)
- **Output**: Automatically generates HTML file in the `output/` directory
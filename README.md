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
├── fraud-detection                  # Main conversion script
│   ├── fraud-detection.adoc         # Example AsciiDoc documentation
│   └── fraud-detection.dashboard.json # Example Dashboard
├── package.json                    # Node.js dependencies and scripts
└── README.md                       # This file
```

## Script Options

The `convert-adoc.js` script accepts the following:

- **Input file**: AsciiDoc file to convert (required)
- **Output**: Automatically generates HTML file in the `output/` directory

## How to add a new Sample Application

To add a new sample application or update an existing one, follow these steps:

### Step 1: Create AsciiDoc File and Assets

1. **Create a new folder** in the root directory following the naming convention `[app-name]` (e.g., `fraud-detection`)

2. **Create a new AsciiDoc file** in the `[app-name]/` directory add a file following the naming convention `fraud-detection.adoc` (e.g., `fraud-detection.adoc`)

3. **Add image assets** to the `assets/` directory:

   - Use descriptive filenames that match your application
   - Supported formats: `.png`, `.jpg`, `.jpeg`, `.gif`
   - Reference images in your AsciiDoc using: `image::filename.ext[]`

4. **Structure your AsciiDoc** with the following sections:
   - `== Overview` - Brief description of the application
   - `== Graph model` - Explanation of the data model
   - `== Next steps` - Links to further resources and exploration

### Step 2: Update manifest.json

Add a reference to your new AsciiDoc file and assets in the `manifest.json` file in the [console-guides repository](https://github.com/neo4j/console-guides/blob/main/manifest.json#L236):

```json
{
  "<name-of-app>": {
    "url": "https://raw.githubusercontent.com/neo4j-product-examples/sample-applications/refs/heads/main/<name-of-app>/<name-of-app>.adoc",
    "imgBaseUrl": "https://raw.githubusercontent.com/neo4j-product-examples/sample-applications/refs/heads/main/<name-of-app>/assets"
  }
}
```

### Step 3: Update demo-datasets.adoc

Update the playlist in the [demo-datasets.adoc file](https://github.com/neo4j/console-guides/blob/main/demo-datasets.adoc) by adding:

1. **Title** - Add your sample app title after `==`
2. **Details** - Add description below the title
3. **Database ID** - Add the `guide=` parameter with your app's database ID
4. **label** - Add your sample app key as specified above `<name-of-app>`
5. **Icon** - Add your app icon inside the directory `assets/`

Example entry:

```asciidoc
[guide="<database-id>",label="<name-of-app>",iconDefault="assets/app-icon.png"]
== Your Sample App Title

Brief description of what your sample app does and demonstrates

```

### Step 4: Test Your Changes (optional)

1. **Convert your AsciiDoc** to HTML to verify formatting:

   ```bash
   npm run convert your-app-name.adoc
   ```

2. **Check the output** in the `output/` directory to ensure images and formatting are correct

3. **Validate links** and ensure all referenced assets exist

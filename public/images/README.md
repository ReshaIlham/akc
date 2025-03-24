# Images Directory

This directory contains all images used in the Agilenesia Kreasi Cerdas website.

## Image Categories

- **Company**: Company logo, branding assets
- **Team**: Team photos, portraits
- **Products**: Product screenshots, illustrations
- **Services**: Service illustrations, diagrams
- **Backgrounds**: Background images used on various pages

## Usage Guidelines

1. Keep images optimized for web (compress when possible)
2. Use descriptive filenames that indicate content
3. Maintain consistent dimensions for similar image types
4. Include ALT text when using images in the website

## How to Reference Images

Images in this directory can be referenced in your code like this:

```jsx
import Image from "next/image"

// Example usage
<Image 
  src="/images/company-logo.png" 
  alt="Agilenesia Kreasi Cerdas Logo" 
  width={200} 
  height={50} 
/>


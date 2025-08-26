const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if sharp is installed
function checkSharp() {
  try {
    require('sharp');
    return true;
  } catch (error) {
    return false;
  }
}

// Function to optimize images
function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  console.log('🔍 Scanning for images to optimize...');
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        const fileSize = stat.size;
        const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
        
        if (fileSize > 500 * 1024) { // Only optimize files larger than 500KB
          console.log(`📸 Found large image: ${file} (${fileSizeMB}MB)`);
          
          // Here you would add image optimization logic
          // For now, we'll just log the files that need optimization
          console.log(`   ⚠️  Consider optimizing: ${filePath}`);
        }
      }
    });
  }
  
  scanDirectory(publicDir);
  console.log('✅ Image scan complete!');
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting image optimization...');
  
  if (!checkSharp()) {
    console.log('⚠️  Sharp not found. Install it with: npm install sharp');
    console.log('📋 Large images found in public folder:');
    optimizeImages();
  } else {
    optimizeImages();
  }
}

module.exports = { optimizeImages };

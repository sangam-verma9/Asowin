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

// Function to convert images to WebP
async function convertToWebP() {
  if (!checkSharp()) {
    console.log('⚠️  Sharp not found. Install it with: npm install sharp');
    console.log('📋 Manual conversion needed for these files:');
    return;
  }

  const sharp = require('sharp');
  const publicDir = path.join(process.cwd(), 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  
  console.log('🔄 Converting images to WebP...');
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(async (file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        const fileSize = stat.size;
        const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
        
        if (fileSize > 500 * 1024) { // Only convert files larger than 500KB
          const outputPath = filePath.replace(/\.[^/.]+$/, '.webp');
          
          try {
            await sharp(filePath)
              .webp({ quality: 80, effort: 6 })
              .toFile(outputPath);
            
            const newSize = fs.statSync(outputPath).size;
            const newSizeMB = (newSize / (1024 * 1024)).toFixed(2);
            const savings = ((fileSize - newSize) / fileSize * 100).toFixed(1);
            
            console.log(`✅ Converted: ${file} (${fileSizeMB}MB → ${newSizeMB}MB, ${savings}% smaller)`);
          } catch (error) {
            console.log(`❌ Failed to convert: ${file} - ${error.message}`);
          }
        }
      }
    });
  }
  
  processDirectory(publicDir);
  console.log('✅ Image conversion complete!');
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting image conversion...');
  convertToWebP();
}

module.exports = { convertToWebP };

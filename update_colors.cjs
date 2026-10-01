const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function fixColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace Hex Codes Globally
  content = content.replace(/#A68846/gi, '#4CAF50'); // Green
  content = content.replace(/166,136,70/g, '76,175,80'); // RGB for #4CAF50 (approx)

  content = content.replace(/#B8942A/gi, '#F06292'); // Pink
  content = content.replace(/184,148,42/g, '240,98,146'); // RGB for #F06292

  content = content.replace(/#91763A/gi, '#2E7D32'); // Dark Green
  content = content.replace(/#876A2E/gi, '#1B5E20'); // Very Dark Green
  content = content.replace(/#9E7B22/gi, '#1B5E20'); // Very Dark Green
  content = content.replace(/158,123,34/g, '27,94,32'); // RGB for #1B5E20

  // Replace background darks with white/light pinks if we want to lighten the theme
  // #111111 is used for backgrounds and text. If we change it, it might break contrast.
  // Actually, keeping #111111 as dark text on light backgrounds is good.
  // But AdminPage has bg-[#111111]. Let's change AdminPage specifically to be light.
  if (filePath.endsWith('AdminPage.tsx')) {
    content = content.replace(/bg-\[#111111\]/g, 'bg-[#F8F8F8]');
    content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-white');
    content = content.replace(/text-\[#111111\]/g, 'text-white');
    content = content.replace(/bg-black\/50/g, 'bg-white/50');
    content = content.replace(/bg-black\/60/g, 'bg-white/60');
  }

  // HeroContent has a dark #111111 background. Let's make it light pink/white
  if (filePath.endsWith('HeroContent.tsx')) {
    content = content.replace(/bg-\[#111111\]/g, 'bg-[#F8F8F8]');
    content = content.replace(/text-\[#111111\]/g, 'text-[#2E7D32]');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated colors in:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixColors(filePath);
    }
  }
}

walkDir(srcDir);

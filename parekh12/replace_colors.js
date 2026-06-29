const fs = require('fs');
const path = require('path');

const directoryPaths = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src')
];

const replacements = {
  '#0A0A0C': '#1A1B23',
  '#121216': '#242530',
  '#24252F': '#343545'
};

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      for (const [oldHex, newHex] of Object.entries(replacements)) {
        if (content.includes(oldHex)) {
          content = content.split(oldHex).join(newHex);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directoryPaths.forEach(processDirectory);
console.log("Global color replacement complete.");

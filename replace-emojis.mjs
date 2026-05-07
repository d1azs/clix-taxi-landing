import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/components/passenger/PassengerBenefits.jsx',
  'src/components/passenger/PassengerTrust.jsx',
  'src/components/passenger/PassengerHowItWorks.jsx',
  'src/components/passenger/PassengerFeatures.jsx',
  'src/components/driver/DriverHowItWorks.jsx',
  'src/components/driver/DriverFeatures.jsx',
  'src/components/driver/DriverTrust.jsx',
  'src/components/driver/DriverProblem.jsx'
];

const emojiMap = {
  "'💰'": '<Icons.Money />',
  "'🚗'": '<Icons.Car />',
  "'🌍'": '<Icons.Globe />',
  "'✅'": '<Icons.Check />',
  "'🛡️'": '<Icons.Shield />',
  "'💬'": '<Icons.Chat />',
  "'👁️'": '<Icons.Eye />',
  "'⚖️'": '<Icons.Scale />',
  "'🔒'": '<Icons.Lock />',
  "'🗺️'": '<Icons.MapIcon />',
  "'📍'": '<Icons.Pin />',
  "'💳'": '<Icons.Card />',
  "'🚕'": '<Icons.Car />',
  "'🧾'": '<Icons.Receipt />',
  "'📋'": '<Icons.Clipboard />',
  "'📲'": '<Icons.Phone />',
  "'⏱️'": '<Icons.Clock />',
  "'⭐'": '<Icons.Star />',
  "'🤝'": '<Icons.Handshake />',
  "'💸'": '<Icons.Money />'
};

for (const relPath of filesToUpdate) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');

    // Add import if not present
    if (!content.includes("import * as Icons")) {
      content = content.replace(/(import { useApp } from '[^']+';)/, "$1\nimport * as Icons from '../shared/Icons';");
      // Fallback if useApp is not imported like above
      if (!content.includes("import * as Icons")) {
         content = content.replace(/(import[^;]+;)/, "$1\nimport * as Icons from '../shared/Icons';");
      }
    }

    // Replace all emojis according to map
    for (const [emoji, component] of Object.entries(emojiMap)) {
      content = content.replace(new RegExp(`icon: ${emoji}`, 'g'), `icon: ${component}`);
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${relPath}`);
  }
}

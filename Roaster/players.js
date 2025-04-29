const fs = require('fs');
const path = require('path');

// === CONFIGURE YOUR PLAYERS HERE ===
const players = [
  {
    id: 'Abby',
    name: 'Abby Fitzgerald',
    img: '../Roaster/Photos/2018-2019/Abby.jpg',
    hometown: 'Fairmont, Minnesota',
    playerClass: 'FJR',
  }, 

      // Add more players here
    {
      id: 'Tenly-Ha',
      name: 'Tenly Hansen',
      img: '../Roaster/Photos/2018-2019/Tenly.jpg',
      hometown: 'York, Nebraska',
      playerClass: 'FR',
    },  

      // Add more players here
    {
      id: 'Kassidy',
      name: 'Kassidy Hart',
      img: '../Roaster/Photos/2018-2019/Kassidy.jpg',
      hometown: 'Omaha, Nebraska',
      playerClass: 'FR',
    },  

      // Add more players here
    {
      id: 'Marilyn',
      name: 'Marilyn Ruiz',
      img: '../Roaster/Photos/2018-2019/Marilyn.jpg',
      hometown: 'Shenandoah, Iowa',
      playerClass: 'SO',
    }, 

      // Add more players here
    {
      id: 'Hanna',
      name: 'Hanna Schoning',
      img: '../Roaster/Photos/2018-2019/Hannah.jpg',
      hometown: 'Arnolds Park, Iowa',
      playerClass: 'SR',
    },  

      // Add more players here
    {
      id: 'Ons',
      name: 'Ons Souissi',
      img: '../Roaster/Photos/2018-2019/Ons.jpg',
      hometown: 'Ariana, Tunisia',
      playerClass: 'SR',
    },  

      // Add more players here
    {
      id: 'Sam',
      name: 'Sam Umberger',
      img: '../Roaster/Photos/2018-2019/Sam.jpg',
      hometown: 'Glenwood, Iowa',
      playerClass: 'SR',
    },

];

// === GENERATE HTML FOR EACH PLAYER ===
function generatePlayerHTML(player) {
  return `
  <!-- Player -->
  <div class="player-R" id="player-${player.id}">
    <div class="player-info">
      <img src="${player.img}" alt="${player.name}">
      <div class="player-name">${player.name}</div>
    </div>
    <button class="more-btn" onclick="showDetails('player-${player.id}', 'details-${player.id}')">⋮</button>
</div>

  <div class="player-details" id="details-${player.id}">
    <h3>${player.name}</h3>
    <p>Hometown: ${player.hometown}</p>
    <p>Class: ${player.playerClass}</p>
    <button class="more-btn" onclick="hideDetails('player-${player.id}', 'details-${player.id}')">← Back</button>
  </div>

  `;
}

// === READ EXISTING HTML FILE ===
const htmlPath = path.join(__dirname, 'Roaster.html'); // <-- Change this to your actual file
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// === FIND THE SPOT TO INSERT (inside #season-2025) ===
const insertMarker = '<div id="roster-2019-women" class="season-gender-roster roster-grid active">';
const index = htmlContent.indexOf(insertMarker);

if (index === -1) {
  console.error('Cannot find season-2025 div in your HTML.');
  process.exit(1);
}

// === BUILD ALL PLAYERS' HTML ===
const playersHTML = players.map(generatePlayerHTML).join('\n');

// === INSERT PLAYERS INTO THE HTML ===
const before = htmlContent.slice(0, index + insertMarker.length);
const after = htmlContent.slice(index + insertMarker.length);
const newHtmlContent = `${before}\n${playersHTML}\n${after}`;

// === WRITE BACK TO FILE ===
fs.writeFileSync(htmlPath, newHtmlContent, 'utf8');

console.log('✅ Players added successfully.');
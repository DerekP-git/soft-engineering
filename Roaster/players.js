const fs = require('fs');
const path = require('path');

// === CONFIGURE YOUR PLAYERS HERE ===
const players = [ 
    {
      id: 'Gabe-D',
      name: 'Gabe DeLeo',
      img: '../Roaster/Photos/2019-2020/Gabe.jpg',
      hometown: 'Corvallis, Montana',
      playerClass: 'SO',
    }, 

      // Add more players here
    {
      id: 'Jaime-Maz',
      name: 'Jaime Maza Martin',
      img: '../Roaster/Photos/Unkonwn.jpg',
      hometown: 'Madrid, Spain',
      playerClass: 'FR',
    }, 

      // Add more players here
    {
      id: 'Jay',
      name: 'Jay\'Von Mackinney',
      img: '../Roaster/Photos/Unkonwn.jpg',
      hometown: 'Blue Springs, Missouri',
      playerClass: 'FR',
    },

      // Add more players here
    {
      id: 'Jory',
      name: 'Jory Opp',
      img: '../Roaster/Photos/2019-2020/Jory.jpg',
      hometown: 'Glendive, Montana',
      playerClass: 'JR',
    }, 

      // Add more players here
      {
        id: 'Bradley',
        name: 'Bradley Rakich',
        img: '../Roaster/Photos/2019-2020/Brian.jpg',
        hometown: 'Dillon, Montana',
        playerClass: 'FR',
      },  

      // Add more players here
    {
      id: 'Jesus',
      name: 'Jesus Angel Sanz',
      img: '../Roaster/Photos/Unkonwn.jpg',
      hometown: 'Burgos,Spain',
      playerClass: 'SR',
    },  

      // Add more players here
    {
      id: 'Garret',
      name: 'Garret Seamans',
      img: '../Roaster/Photos/2019-2020/Garret.jpg',
      hometown: 'Gillette, Wyoming',
      playerClass: 'JR',
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
const insertMarker = '<div id="roster-2020-men" class="season-gender-roster roster-grid active">';
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
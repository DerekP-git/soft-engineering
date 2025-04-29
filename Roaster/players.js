const fs = require('fs');
const path = require('path');

// === CONFIGURE YOUR PLAYERS HERE ===
const players = [ 
    {
      id: 'Katie',
      name: 'Katie Hanson',
      img: '../Roaster/Photos/2013-2014/Katie.jpg',
      hometown: 'Saint Peter, Minnesota',
      playerClass: 'SO',
    }, 

      // Add more players here
    {
      id: 'Kathryn',
      name: 'Kathryn Jones',
      img: '../Roaster/Photos/2013-2014/Kathryn.jpg',
      hometown: 'Laramie,Wyoming',
      playerClass: 'NA',
    }, 

      // Add more players here
    {
      id: 'Amanda',
      name: 'Amanda Przymus',
      img: '../Roaster/Photos/2013-2014/Amanda.jpg',
      hometown: 'Rapid City, South Dakota',
      playerClass: 'SR',
    },

      // Add more players here
    {
      id: 'Megan',
      name: 'MeganSolberg',
      img: '../Roaster/Photos/Unkonwn.jpg',
      hometown: 'Mitchell, South Dakota',
      playerClass: 'JR',
    }, 

      // Add more players here
      {
        id: 'Jeannine',
        name: 'Jeannine Stocker',
        img: '../Roaster/Photos/2013-2014/Jeannine.jpg',
        hometown: 'NA',
        playerClass: 'NA',
      },  

      // Add more players here
    {
      id: 'Audri',
      name: 'Audri Swisher',
      img: '../Roaster/Photos/2013-2014/Audri.jpg',
      hometown: 'NA',
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
const insertMarker = '<div id="roster-2014-women" class="season-gender-roster roster-grid active">';
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
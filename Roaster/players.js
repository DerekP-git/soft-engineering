const fs = require('fs');
const path = require('path');

// === CONFIGURE YOUR PLAYERS HERE ===
const players = [
  {
    id: 'WinyouA',
    name: 'Winyou Asavaruangchai',
    img: '../Roaster/Photos/2022-2023/Winyou.jpeg',
    hometown: 'Udon Thani, Thailand',
    playerClass: 'SO',
  }, 

      // Add more players here
    {
      id: 'EduC',
      name: 'Eduard Cardelus',
      img: '../Roaster/Photos/2022-2023/Edu.jpeg',
      hometown: 'Calella, Spain',
      playerClass: 'SO',
    },  

      // Add more players here
    {
      id: 'ChaseC',
      name: 'Chase Carter',
      img: '../Roaster/Photos/2022-2023/Chase.jpeg',
      hometown: 'Norfolk, Nebraska',
      playerClass: 'FR',
    },  

      // Add more players here
    {
      id: 'Alexander',
      name: 'Alexander Castillo',
      img: '../Roaster/Photos/2022-2023/Alex.jpeg',
      hometown: 'Valencia, Venezuela',
      playerClass: 'FR',
    }, 

      // Add more players here
    {
      id: 'Rodrigo',
      name: 'Rodrigo Iraheta',
      img: '../Roaster/Photos/2022-2023/Rodri.jpeg',
      hometown: 'Santa Tecla, El Salvador',
      playerClass: 'SO',
    },  

      // Add more players here
    {
      id: 'Jaime',
      name: 'Jaime Maza Martin',
      img: '../Roaster/Photos/2022-2023/Jaime.jpeg',
      hometown: 'Madrid, Spain',
      playerClass: 'SR',
    },  

      // Add more players here
    {
      id: 'Abhishek',
      name: 'Abhishek Mohapaatra',
      img: '../Roaster/Photos/2022-2023/Abhi.jpeg',
      hometown: 'Bhubaneswar, Odisah, India',
      playerClass: 'FR',
    },


      // Add more players here
    {
      id: 'Danny',
      name: 'Danny O\'Brien',
      img: '../Roaster/Photos/2022-2023/Daany.jpeg',
      hometown: 'Longmont, Colorado',
      playerClass: 'SO',
    },

      // Add more players here
    {
      id: 'JoaoP',
      name: 'Joao Pedro Pierry Izoldi Costa',
      img: '../Roaster/Photos/2022-2023/Jp.jpeg',
      hometown: 'Santos, Brazil',
      playerClass: 'FR',
    },


      // Add more players here
    {
      id: 'Dalton-P',
      name: 'Dalton Polesky',
      img: '../Roaster/Photos/2022-2023/Dalton.jpeg',
      hometown: 'Miles City, Montana',
      playerClass: 'FR',
    },

      // Add more players here
    {
      id: 'Mikhil-R',
      name: 'Mikhil Raja',
      img: '../Roaster/Photos/2022-2023/Mikhil.jpeg',
      hometown: 'Belvedere Harare, Zimbabwe',
      playerClass: 'FR',
    },

      // Add more players here
    {
      id: 'Mark-T',
      name: 'Mark Trenkle',
      img: '../Roaster/Photos/2022-2023/Mark.jpeg',
      hometown: 'Lahr, Germany',
      playerClass: 'SO',
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
const insertMarker = '<div id="roster-2022-men" class="season-gender-roster roster-grid active">';
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
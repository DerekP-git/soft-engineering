const fs = require('fs');
const path = require('path');

// === CONFIGURE YOUR PLAYERS HERE ===
const players = [
  {
    id: 'Kailee',
    name: 'Kaile Bailey',
    img: '../Roaster/Photos/2024-2025/Kailee.jpeg',
    hometown: 'Omaha, Nebraska',
    playerClass: 'FR',
  },
  {
    id: 'Taylor',
    name: 'Taylor Cole',
    img: '../Roaster/Photos/2024-2025/Taylor.jpeg',
    hometown: 'Clarinda, Iowa',
    playerClass: 'SO',
  },
  // Add more players here
  {
    id: 'Emma',
    name: 'Emma Dahlhoff',
    img: '../Roaster/Photos/2024-2025/Taylor.jpeg',
    hometown: 'Vermillion, South Dakota',
    playerClass: 'SR',
  },

    // Add more players here
    {
      id: 'Lauren',
      name: 'Lauren Ellis',
      img: '../Roaster/Photos/2024-2025/Lauren.jpeg',
      hometown: 'Spencer, Iowa',
      playerClass: 'FR',
    },

    // Add more players here
    {
      id: 'Sophia',
      name: 'Sophia Guntren',
      img: '../Roaster/Photos/2024-2025/Sophia.jpeg',
      hometown: 'Sergeant Bluff, Iowa',
      playerClass: 'JR',
    },  

        // Add more players here
    {
      id: 'Jennifer',
      name: 'Jennifer Hubert',
      img: '../Roaster/Photos/2024-2025/Jennifer.jpeg',
      hometown: 'Omaha, Nebraska',
      playerClass: 'FR',
    }, 
    
       // Add more players here
    {
      id: 'Line',
      name: 'Line Jensen',
      img: '../Roaster/Photos/2024-2025/Line.jpeg',
      hometown: 'Humlebaek, Denmark',
      playerClass: 'So',
    },   

       // Add more players here
    {
      id: 'Bara',
      name: 'Barbora Kozouskova',
      img: '../Roaster/Photos/2024-2025/Bara.jpeg',
      hometown: 'Brno, Czech Republic',
      playerClass: 'SR',
    }, 

       // Add more players here
    {
      id: 'Brooke',
      name: 'Brooke Marshall',
      img: '../Roaster/Photos/2024-2025/Brooke.jpeg',
      hometown: 'Bungalow, Queensland, Australia',
      playerClass: 'FR',
    },  

       // Add more players here
    {
      id: 'Addi',
      name: 'Addison Meyers',
      img: '../Roaster/Photos/2024-2025/Addi.jpeg',
      hometown: 'Brandon, South Dakota',
      playerClass: 'FR',
    }, 

           // Add more players here
    {
      id: 'Ellie',
      name: 'Ellie Peterson',
      img: '../Roaster/Photos/2024-2025/Ellie.jpeg',
      hometown: 'York, Nebraska',
      playerClass: 'FR',
    }, 

           // Add more players here
    {
      id: 'Julie',
      name: 'Julie Raffel',
      img: '../Roaster/Photos/2024-2025/Julie.jpeg',
      hometown: 'Rungsted, Denmark',
      playerClass: 'SR',
    }, 

           // Add more players here
    {
      id: 'Grace',
      name: 'Grace Riha',
      img: '../Roaster/Photos/2024-2025/Grace.jpeg',
      hometown: 'Omaha, Nebraska',
      playerClass: 'FR',
    }, 

           // Add more players here
    {
      id: 'Stef',
      name: 'Stefany Simplicio',
      img: '../Roaster/Photos/2024-2025/Stef.jpeg',
      hometown: 'Santo Andre, Brazil',
      playerClass: 'FR',
    }, 

           // Add more players here
    {
      id: 'Lidia',
      name: 'Lidia Suarez',
      img: '../Roaster/Photos/2024-2025/Lidia.jpeg',
      hometown: 'Caracas, Venezuela',
      playerClass: 'SO',
    }, 

           // Add more players here
    {
      id: 'Faith',
      name: 'Faith TenHulzen',
      img: '../Roaster/Photos/2024-2025/Faith.jpeg',
      hometown: 'Sioux City, Iowa',
      playerClass: 'JR',
    }, 

           // Add more players here
    {
      id: 'Mia',
      name: 'Mia Wenzel',
      img: '../Roaster/Photos/2024-2025/Mia.jpeg',
      hometown: 'Luverne, Minnesota',
      playerClass: 'FR',
    }, 
];

// === GENERATE HTML FOR EACH PLAYER ===
function generatePlayerHTML(player) {
  return `
  <!-- Player -->
  <div id="season-2025" class="season-roster active">
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
</div>

  `;
}

// === READ EXISTING HTML FILE ===
const htmlPath = path.join(__dirname, 'Roaster.html'); // <-- Change this to your actual file
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// === FIND THE SPOT TO INSERT (inside #season-2025) ===
const insertMarker = '<div id="roster-2025-women" class="season-gender-roster roster-grid">';
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
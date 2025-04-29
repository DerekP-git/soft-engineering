function updateRosterView() {
    // Get selected season and gender
    const season = document.getElementById('season').value;
    const gender = document.getElementById('gender').value;

    // Hide all rosters
    const rosters = document.querySelectorAll('.season-gender-roster');
    rosters.forEach(roster => {
        roster.classList.remove('active');
        roster.style.display = 'none';
    });

    // Show the correct roster
    const rosterId = `roster-${season}-${gender}`;
    const selectedRoster = document.getElementById(rosterId);

    if (selectedRoster) {
        selectedRoster.classList.add('active');
        selectedRoster.style.display = 'block'; // Or 'block' if you prefer
    } else {
        console.log('Roster not found for:', rosterId);
    }
}

function toggleDetails(id) {
        document.getElementById(id).classList.toggle("active");
      }
    
      function showDetails(playerId, detailsId) {
    document.getElementById(playerId).style.display = "none";
    document.getElementById(detailsId).classList.add("active");
}

function hideDetails(playerId, detailsId) {
    document.getElementById(detailsId).classList.remove("active");
    document.getElementById(playerId).style.display = "flex";
}

window.onload = function() {
        updateRosterView();
    };
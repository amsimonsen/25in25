// Basic password prompt (NOT secure for sensitive info)
const password = "foryoureyesonly";
const userInput = prompt("Enter the password to view this site:");
if (userInput !== password) {
  document.body.innerHTML = "<h1>Access Denied</h1>";
}

// Color fill on click (vanilla JS)
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    var color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;
  }
});

// Card flip function
function clickDone() {
  var card = document.querySelector('.card');
  if (card) {
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped');
    });
  }
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    // Color it
    var color = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = color;

    // Flip it
    event.target.classList.toggle('flipped');
  }
});

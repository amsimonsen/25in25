// Basic password prompt (NOT secure for sensitive info)
const password = "foryoureyesonly";
const userInput = prompt("Enter the password to view this site:");
if (userInput !== password) {
  document.body.innerHTML = "<h1>Access Denied</h1>";
}

// Grid creation function
function makeGrid() {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var table = document.getElementById('pixelCanvas');

  table.innerHTML = '';
  var tbody = document.createElement('tbody');

  for (var i = 0; i < height; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < width; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
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

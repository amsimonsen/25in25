// Basic password prompt (NOT secure for sensitive info)
const password = "foryoureyesonly";
const userInput = prompt("Enter the password to view this site:");
if (userInput !== password) {
  document.body.innerHTML = "<h1>Access Denied</h1>";
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    // Flip it
    event.target.classList.toggle('flipped');
  }
});

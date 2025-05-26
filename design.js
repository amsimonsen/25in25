// Basic password prompt (NOT secure for sensitive info)
//const password = "foryoureyesonly";
//const userInput = prompt("Enter the password to view this site:");
//if (userInput !== password) {
//  document.body.innerHTML = "<h1>Access Denied</h1>";
//}
/*
document.addEventListener('click', function(event) {
  // Find the closest td element
  const cell = event.target.closest('td');
  if (cell) {
    cell.classList.toggle('flipped');
  }
});*/

 /* document.addEventListener('click', function(event) {
  if (event.target.tagName === "TD") {
    // Flip it
    event.target.classList.toggle('flipped');
  }
});*/


  document.addEventListener('click', function(event) {
  if (event.target.className === "side-a" || event.target.className === "closeMe") {
    // Flip it
    const cell = event.target.closest('td');
      if (cell) {
        cell.classList.toggle('flipped');
  }
}});
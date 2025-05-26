function makeGrid() {
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var table = document.getElementById('pixelCanvas');
	// Table grid creation code :
    table.innerHTML = '';
    var tbody = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
};

$(body).on("click", td, function() {
    var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});

function clickDone () {
        card.addEventListener('click', function() {
          card.classList.toggle('is-flipped');
        });
      </script>

<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
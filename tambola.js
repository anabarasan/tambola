const PATTERNS = [
  [-1, -1, -1, -1, -1, 0, 0, 0, 0],
  [-1, -1, -1, -1, 0, -1, 0, 0, 0],
  [-1, -1, -1, -1, 0, 0, -1, 0, 0],
  [-1, -1, -1, -1, 0, 0, 0, -1, 0],
  [-1, -1, -1, -1, 0, 0, 0, 0, -1],
  [-1, -1, -1, 0, -1, -1, 0, 0, 0],
  [-1, -1, -1, 0, -1, 0, -1, 0, 0],
  [-1, -1, -1, 0, -1, 0, 0, -1, 0],
  [-1, -1, -1, 0, -1, 0, 0, 0, -1],
  [-1, -1, -1, 0, 0, -1, -1, 0, 0],
  [-1, -1, -1, 0, 0, -1, 0, -1, 0],
  [-1, -1, -1, 0, 0, -1, 0, 0, -1],
  [-1, -1, -1, 0, 0, 0, -1, -1, 0],
  [-1, -1, -1, 0, 0, 0, -1, 0, -1],
  [-1, -1, -1, 0, 0, 0, 0, -1, -1],
  [-1, -1, 0, -1, -1, -1, 0, 0, 0],
  [-1, -1, 0, -1, -1, 0, -1, 0, 0],
  [-1, -1, 0, -1, -1, 0, 0, -1, 0],
  [-1, -1, 0, -1, -1, 0, 0, 0, -1],
  [-1, -1, 0, -1, 0, -1, -1, 0, 0],
  [-1, -1, 0, -1, 0, -1, 0, -1, 0],
  [-1, -1, 0, -1, 0, -1, 0, 0, -1],
  [-1, -1, 0, -1, 0, 0, -1, -1, 0],
  [-1, -1, 0, -1, 0, 0, -1, 0, -1],
  [-1, -1, 0, -1, 0, 0, 0, -1, -1],
  [-1, -1, 0, 0, -1, -1, -1, 0, 0],
  [-1, -1, 0, 0, -1, -1, 0, -1, 0],
  [-1, -1, 0, 0, -1, -1, 0, 0, -1],
  [-1, -1, 0, 0, -1, 0, -1, -1, 0],
  [-1, -1, 0, 0, -1, 0, -1, 0, -1],
  [-1, -1, 0, 0, -1, 0, 0, -1, -1],
  [-1, -1, 0, 0, 0, -1, -1, -1, 0],
  [-1, -1, 0, 0, 0, -1, -1, 0, -1],
  [-1, -1, 0, 0, 0, -1, 0, -1, -1],
  [-1, -1, 0, 0, 0, 0, -1, -1, -1],
  [-1, 0, -1, -1, -1, -1, 0, 0, 0],
  [-1, 0, -1, -1, -1, 0, -1, 0, 0],
  [-1, 0, -1, -1, -1, 0, 0, -1, 0],
  [-1, 0, -1, -1, -1, 0, 0, 0, -1],
  [-1, 0, -1, -1, 0, -1, -1, 0, 0],
  [-1, 0, -1, -1, 0, -1, 0, -1, 0],
  [-1, 0, -1, -1, 0, -1, 0, 0, -1],
  [-1, 0, -1, -1, 0, 0, -1, -1, 0],
  [-1, 0, -1, -1, 0, 0, -1, 0, -1],
  [-1, 0, -1, -1, 0, 0, 0, -1, -1],
  [-1, 0, -1, 0, -1, -1, -1, 0, 0],
  [-1, 0, -1, 0, -1, -1, 0, -1, 0],
  [-1, 0, -1, 0, -1, -1, 0, 0, -1],
  [-1, 0, -1, 0, -1, 0, -1, -1, 0],
  [-1, 0, -1, 0, -1, 0, -1, 0, -1],
  [-1, 0, -1, 0, -1, 0, 0, -1, -1],
  [-1, 0, -1, 0, 0, -1, -1, -1, 0],
  [-1, 0, -1, 0, 0, -1, -1, 0, -1],
  [-1, 0, -1, 0, 0, -1, 0, -1, -1],
  [-1, 0, -1, 0, 0, 0, -1, -1, -1],
  [-1, 0, 0, -1, -1, -1, -1, 0, 0],
  [-1, 0, 0, -1, -1, -1, 0, -1, 0],
  [-1, 0, 0, -1, -1, -1, 0, 0, -1],
  [-1, 0, 0, -1, -1, 0, -1, -1, 0],
  [-1, 0, 0, -1, -1, 0, -1, 0, -1],
  [-1, 0, 0, -1, -1, 0, 0, -1, -1],
  [-1, 0, 0, -1, 0, -1, -1, -1, 0],
  [-1, 0, 0, -1, 0, -1, -1, 0, -1],
  [-1, 0, 0, -1, 0, -1, 0, -1, -1],
  [-1, 0, 0, -1, 0, 0, -1, -1, -1],
  [-1, 0, 0, 0, -1, -1, -1, -1, 0],
  [-1, 0, 0, 0, -1, -1, -1, 0, -1],
  [-1, 0, 0, 0, -1, -1, 0, -1, -1],
  [-1, 0, 0, 0, -1, 0, -1, -1, -1],
  [-1, 0, 0, 0, 0, -1, -1, -1, -1],
  [0, -1, -1, -1, -1, -1, 0, 0, 0],
  [0, -1, -1, -1, -1, 0, -1, 0, 0],
  [0, -1, -1, -1, -1, 0, 0, -1, 0],
  [0, -1, -1, -1, -1, 0, 0, 0, -1],
  [0, -1, -1, -1, 0, -1, -1, 0, 0],
  [0, -1, -1, -1, 0, -1, 0, -1, 0],
  [0, -1, -1, -1, 0, -1, 0, 0, -1],
  [0, -1, -1, -1, 0, 0, -1, -1, 0],
  [0, -1, -1, -1, 0, 0, -1, 0, -1],
  [0, -1, -1, -1, 0, 0, 0, -1, -1],
  [0, -1, -1, 0, -1, -1, -1, 0, 0],
  [0, -1, -1, 0, -1, -1, 0, -1, 0],
  [0, -1, -1, 0, -1, -1, 0, 0, -1],
  [0, -1, -1, 0, -1, 0, -1, -1, 0],
  [0, -1, -1, 0, -1, 0, -1, 0, -1],
  [0, -1, -1, 0, -1, 0, 0, -1, -1],
  [0, -1, -1, 0, 0, -1, -1, -1, 0],
  [0, -1, -1, 0, 0, -1, -1, 0, -1],
  [0, -1, -1, 0, 0, -1, 0, -1, -1],
  [0, -1, -1, 0, 0, 0, -1, -1, -1],
  [0, -1, 0, -1, -1, -1, -1, 0, 0],
  [0, -1, 0, -1, -1, -1, 0, -1, 0],
  [0, -1, 0, -1, -1, -1, 0, 0, -1],
  [0, -1, 0, -1, -1, 0, -1, -1, 0],
  [0, -1, 0, -1, -1, 0, -1, 0, -1],
  [0, -1, 0, -1, -1, 0, 0, -1, -1],
  [0, -1, 0, -1, 0, -1, -1, -1, 0],
  [0, -1, 0, -1, 0, -1, -1, 0, -1],
  [0, -1, 0, -1, 0, -1, 0, -1, -1],
  [0, -1, 0, -1, 0, 0, -1, -1, -1],
  [0, -1, 0, 0, -1, -1, -1, -1, 0],
  [0, -1, 0, 0, -1, -1, -1, 0, -1],
  [0, -1, 0, 0, -1, -1, 0, -1, -1],
  [0, -1, 0, 0, -1, 0, -1, -1, -1],
  [0, -1, 0, 0, 0, -1, -1, -1, -1],
  [0, 0, -1, -1, -1, -1, -1, 0, 0],
  [0, 0, -1, -1, -1, -1, 0, -1, 0],
  [0, 0, -1, -1, -1, -1, 0, 0, -1],
  [0, 0, -1, -1, -1, 0, -1, -1, 0],
  [0, 0, -1, -1, -1, 0, -1, 0, -1],
  [0, 0, -1, -1, -1, 0, 0, -1, -1],
  [0, 0, -1, -1, 0, -1, -1, -1, 0],
  [0, 0, -1, -1, 0, -1, -1, 0, -1],
  [0, 0, -1, -1, 0, -1, 0, -1, -1],
  [0, 0, -1, -1, 0, 0, -1, -1, -1],
  [0, 0, -1, 0, -1, -1, -1, -1, 0],
  [0, 0, -1, 0, -1, -1, -1, 0, -1],
  [0, 0, -1, 0, -1, -1, 0, -1, -1],
  [0, 0, -1, 0, -1, 0, -1, -1, -1],
  [0, 0, -1, 0, 0, -1, -1, -1, -1],
  [0, 0, 0, -1, -1, -1, -1, -1, 0],
  [0, 0, 0, -1, -1, -1, -1, 0, -1],
  [0, 0, 0, -1, -1, -1, 0, -1, -1],
  [0, 0, 0, -1, -1, 0, -1, -1, -1],
  [0, 0, 0, -1, 0, -1, -1, -1, -1],
  [0, 0, 0, 0, -1, -1, -1, -1, -1]
]

const RANGES = {
  0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  1: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  2: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  3: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  4: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  5: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  6: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  7: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  8: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
}

SEQUENCE = [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90
]

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function get_row_patterns(){
  var row_patterns = [];
  while (row_patterns.length < 3) {
    var pattern = choose(PATTERNS);
    if (row_patterns.indexOf(pattern) == -1) {
      row_patterns.push(pattern);
    }
  }
  return row_patterns;
}

function get_positions_to_fill(row_patterns){
  var positions_to_fill = [];
  for (var i=0; i<row_patterns.length; i++){
    for (var j=0;j<row_patterns[0].length; j++){
      if (row_patterns[i][j] == -1){
        positions_to_fill.push([i, j]);
      }
    }
  }
  return positions_to_fill;
}

function fill_column_values(ticket){
  var positions_to_fill = get_positions_to_fill(ticket);
  var selected = [];
  var i = 0;
  while (i < positions_to_fill.length) {
    var row = positions_to_fill[i][0];
    var col = positions_to_fill[i][1];
    var value = choose(RANGES[col]);
    if (selected.indexOf(value) == -1) {
      ticket[row][col] = value;
      selected.push(value);
      i = i + 1;
    }
  }
}

function sort_ticket_columns(ticket) {
  [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(function(j){
    var col = [];
    ticket.forEach(function(row) {
      if (row[j] != 0){
        col.push(row[j]);
      }
    })
    col.sort();
    ticket.forEach(function(row){
      if (row[j] != 0) {
        row[j] = col.shift();
      }
    })
  })
}

function generate() {
  ticket = get_row_patterns();
  fill_column_values(ticket);
  sort_ticket_columns(ticket);
  return ticket;
}

function update_display(ticket) {
  ticket.forEach(function(row, rIdx){
    row.forEach(function(value, cIdx) {
      if (value != 0) {
        var cellId = "r" + rIdx + "c" + cIdx;
        var e = document.getElementById(cellId);
        e.innerHTML = value;
      }
    });
  });
}

function leftClick() {
  var target = event.target || event.srcElement;
  if (target.innerHTML.trim() == "") {
    return;
  }
  target.style.background = 'lime';
  clicked = localStorage.getItem('tclicked');
  clicked = JSON.parse(clicked);
  if (clicked.indexOf(target.id) == -1) {
    clicked.push(target.id)
  }
  localStorage.setItem('tclicked', JSON.stringify(clicked));
}

function rightClick() {
  var target = event.target || event.srcElement;
  if (target.innerHTML.trim() == "") {
    return;
  }
  target.style.background = '';
  event.preventDefault();
  event.stopPropagation();
  clicked = localStorage.getItem('tclicked');
  clicked = JSON.parse(clicked);
  if (clicked.indexOf(target.id) != -1) {
    idx = clicked.indexOf(target.id);
    clicked.splice(idx, 1);
  }
  localStorage.setItem('tclicked', JSON.stringify(clicked));
}

function main() {
  var tds = document.getElementsByTagName("td");
  for (var i=0; i<tds.length; i++){
    tds[i].addEventListener('click', leftClick);
    tds[i].addEventListener('contextmenu', rightClick);
  }

  var ticket = localStorage.getItem('ticket');
  if (ticket) {
    ticket = JSON.parse(ticket);
  } else {
    ticket = generate();
    localStorage.setItem('ticket', JSON.stringify(ticket));
  }
  update_display(ticket);

  var clicked = localStorage.getItem('tclicked');
  if (clicked) {
    clicked = JSON.parse(clicked);
    clicked.forEach(function(elemId){
      elem = document.getElementById(elemId);
      elem.style.background = 'lime';
    });
  } else {
    localStorage.setItem('tclicked', JSON.stringify([]));
  }
}

main()

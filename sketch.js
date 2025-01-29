let brave, encanto, frozen_II, luca, moana, princess_and_the_frog, tangled;
let movie_poster_array = [];
let movie_names = ["Frozen II", "Encanto", "Moana", "Princess and the Frog", "Brave", "Tangled", "Luca"];
let movie_data = [];  
let data_table;
let star_size = 15;  

function preload() {
  data_table = loadTable('Resources/movie_data.csv', 'csv', 'header');

  brave = loadImage('Resources/brave.jpg');
  encanto = loadImage('Resources/encanto.jpg');
  frozen_II = loadImage('Resources/frozen II.jpeg');
  luca = loadImage('Resources/luca.jpg');
  moana = loadImage('Resources/moana.jpg');
  princess_and_the_frog = loadImage('Resources/princess and the frog.jpg');
  tangled = loadImage('Resources/tangled.webp');

  movie_poster_array = [frozen_II, encanto, moana, princess_and_the_frog, brave, tangled, luca];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("Rows loaded: " + data_table.getRowCount());
  console.log("CSV Data:", data_table.getArray());

  // Extract views from CSV
  for (let i = 0; i < movie_names.length; i++) {
    let row = data_table.findRow(movie_names[i], 'movie_name');
    if (row) {
      let views = row.getNum('views');
      movie_data.push(views);
    } else {
      movie_data.push(0);
    }
  }

  console.log("Extracted Movie Data:", movie_data);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

// Function to display posters
function moviePosters() {
  let poster_width = windowWidth / 7.5;
  let poster_height = poster_width * 1.5;
  let xpos = 50;
  let ypos = height - poster_height - 50;  

  for (let i = 0; i < movie_poster_array.length; i++) {
    image(movie_poster_array[i], xpos, ypos, poster_width, poster_height);
    drawStars(xpos, ypos - 20, floor(movie_data[i] / 10));  // Draw stars above poster
    xpos += poster_width + 20;
  }
}

// Function to draw stars with wrapping (max 20 per column)
function drawStars(x, y, numStars) {
  let maxStarsPerColumn = 20; // Max stars in one column before wrapping
  let columnSpacing = star_size + 10; // Space between star columns
  let rowSpacing = star_size + 5; // Space between stacked stars

  fill(255, 215, 0);
  textSize(star_size);
  textAlign(CENTER);

  for (let i = 0; i < numStars; i++) {
    let col = floor(i / maxStarsPerColumn); // Column index
    let row = i % maxStarsPerColumn; // Row index (resets after 20)

    let starX = x + col * columnSpacing; // Move to a new column
    let starY = y - row * rowSpacing; // Stack stars in the column

    text("★", starX, starY);
  }
}

function draw() {
  background(0);
  moviePosters();
  fill(255, 255, 255);
  text("Amount of times I have watched each movie where 1 ★ = 10", windowWidth / 4, windowHeight / 10);
}

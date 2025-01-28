// Declare variables for movie posters, movie names, and data
let brave, encanto, frozen_II, luca, moana, princess_and_the_frog, tangled;
let movie_poster_array = [];
let movie_names = ["Frozen II", "Encanto", "Moana", "Princess and the Frog", "Brave", "Tangled", "Luca"];
let movie_data = [];  // Array to store the views data
let star_size = 30;  // Size of the stars

function preload() {
  // Load the table data from the CSV
  data_table = loadTable('Resources/movie_data.csv', 'csv', 'header');

  // Load the movie posters
  brave = loadImage('Resources/brave.jpg');
  encanto = loadImage('Resources/encanto.jpg');
  frozen_II = loadImage('Resources/frozen II.jpeg');
  luca = loadImage('Resources/luca.jpg');
  moana = loadImage('Resources/moana.jpg');
  princess_and_the_frog = loadImage('Resources/princess and the frog.jpg');
  tangled = loadImage('Resources/tangled.webp');
  
  // Store all posters in an array
  movie_poster_array = [brave, encanto, frozen_II, luca, moana, princess_and_the_frog, tangled];

  // Get the view data from the CSV file
  for (let i = 0; i < movie_names.length; i++) {
    let row = data_table.findRow(movie_names[i], 'movie_name');
    if (row) {
      let views = row.getNum('views');
      movie_data.push(views);  // Push the view count into the array
    } else {
      movie_data.push(0);  // If no data, assume 0 views
    }
  }

  // Debugging: Log the movie data to ensure views are correctly loaded
  console.log(movie_data);  // Check if the movie data is correctly loaded
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  print_movie_images();  // Print movie posters and stars above them
}

function print_movie_images() {
  let movie_width = windowWidth / 7;  // Adjust width for posters
  let movie_height = windowHeight / 4;  // Adjust height for rectangular posters
  
  let xpos = 50;  // Starting x position for images
  let ypos = windowHeight - 250;  // Starting y position for images
  
  for (let i = 0; i < movie_poster_array.length; i++) {
    let num_stars = floor(movie_data[i] / 10); // Calculate number of stars based on views (1 star per 10 views)
    
    // Debugging: Log the number of stars for each movie
    console.log("Movie: " + movie_names[i] + " Views: " + movie_data[i] + " Stars: " + num_stars);

    // Draw stars above the movie poster
    let star_xpos = xpos + movie_width / 2 - star_size / 2;  // Center stars above the poster
    let star_ypos = ypos - 40;  // Position stars slightly above the poster
    
    // Draw stars vertically (only draw stars if num_stars is greater than 0)
    if (num_stars > 0) {
      fill('gold');
      textSize(star_size);
      textAlign(CENTER);
      for (let j = 0; j < num_stars; j++) {
        text("★", star_xpos, star_ypos - j * (star_size + 5));  // Stacking stars vertically
      }
    } else {
      // Debugging: If no stars are being drawn, show a fallback message
      console.log("No stars for: " + movie_names[i]);
    }

    // Draw the movie poster below the stars
    image(movie_poster_array[i], xpos, ypos, movie_width, movie_height);

    // Update xpos for the next movie poster
    xpos += movie_width + 20;  // 20 pixels of space between posters
  }
}

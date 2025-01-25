//declaring album artwork images and array 
let under_the_bushes, cold_visions, how_sad, jack_and, jesus_is_king, sunset_tree, dear_god, the_agent;
let album_art_array;

//declaring table
let data_table;

//declaring musical note images
let note1, note2, note3, note4, note5, note6;
let note_array


function preload(){

  //loading table
  data_table = loadTable('Resources/album_data.csv', 'csv', 'header');

  //loading images and array
  under_the_bushes = loadImage('Resources/Under.jpg');
  cold_visions = loadImage('Resources/Cold_Visions.jpg');
  how_sad = loadImage('Resources/How_Sad.jpg');
  jack_and = loadImage('Resources/jack.jpg');
  jesus_is_king = loadImage('Resources/Jesus.jpg');
  sunset_tree = loadImage('Resources/Sunset.jpg');
  dear_god = loadImage('Resources/Deargod.jpg');
  the_agent = loadImage('Resources/Agent.jpg');
  album_art_array = [under_the_bushes, cold_visions, how_sad, jack_and, jesus_is_king, sunset_tree, dear_god, the_agent];


  //loading music note images
  note1 = loadImage ('Resources/musicalnotes/note1.png');
  note2 = loadImage ('Resources/musicalnotes/note2.png');
  note3 = loadImage ('Resources/musicalnotes/note3.png');
  note4 = loadImage ('Resources/musicalnotes/note4.png');
  note5 = loadImage ('Resources/musicalnotes/note5.png');
  note6 = loadImage ('Resources/musicalnotes/note6.png');
  note_array = [note1, note2, note3, note4, note5, note6];

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2)
}

//function  for window resizing
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  print_album_images();
  
}

function print_album_images(){
  //album sizing
  let album_size = floor(windowWidth/12);
  let total_album_size = (album_size * album_art_array.length);
  let space_leftover = windowWidth - total_album_size;

    // x and y position and spacing between albums
  let space = space_leftover / (album_art_array.length + 1);
  let xpos = space;
  let ypos = windowHeight - (windowHeight/4);

  // musical note size
  let note_size = album_size/2;
  
  for(let x = 0; x< album_art_array.length; x++){
    imageMode(CORNER);
    image(album_art_array[x], xpos, ypos, album_size, album_size);
    print_music_data(x, xpos, ypos, album_size);
    xpos += album_size + space;
    
  }
  my_text(space);
}

//function for printing the music data
function print_music_data(num, xpos, ypos, album_size){
  let mydata = data_table.get(0, num);
  let current_y = ypos-album_size;
  let note_count = floor(mydata);

  //dynamic note sizing
  total_height = windowHeight;
  max_notes = floor(data_table.get(0, 0));
  avail_area = (total_height - 50) - (total_height - current_y);
  avail_top = 50;
  note_size = avail_area/ max_notes;



  for(x=1; x<note_count; x++){
    if (current_y> avail_top){
    imageMode(CORNER);
    let my_note = note_array[floor(random(0, note_array.length))];
    image(my_note, xpos, current_y, note_size, note_size);
    current_y -= note_size;}
  }
}



function my_text(xpos){
  let ypos = windowHeight - 20;
  textSize(20);
  fill('black');
  text("my most played albums in descending order^", xpos, ypos);
}


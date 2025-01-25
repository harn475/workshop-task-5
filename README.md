# workshop-task-5
# Data Visualisation
## Workshop Goals:
- Create an interactive p5.js sketch with at least three different kinds of user input events.
- Experiment with ways to record and redeploy inputs from the user.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Notes and Planning
Below are the notes I took during the workshop tutorial:
(Add pic)

I also made a small sketch of what I wanted my website to look like:
(Add pic)

My plan was to collect my music listening data from a website called last.fm (https://www.last.fm/), which records every time you listen to a song/ album on a music streaming app such as spotify.
Using this data I would made a basic webpage showing my most listened to albums in order with a bar graph and album cover images.
I also wanted my website to have dynamic sizing.

## Collecting Data
Before beginning coding for my website I collected the data and images I wanted to use.
I used google sheets to record my most listened to albums in the last 90 days, including the album name and amound of times played.

(Add sc of both)

I also went and collected my album cover images from google images.

For my bar graph I decided to make my own images, for this I used paint 3d and used the 2d pen tool to draw some basic musical notes. 
Rather than a regular bar shape I wanted to do something similar to the fruit images used by Leo.

(Add sc of paint 3d and musical notes)

## Creating my sketch
I structured my code similarly to my previous program, declaring my global variables and loading them in a preload function.
I also stored my images in arrays for easy referencing against my table as well as the ability to call random indexes.

### Testing
I began with making a text function to see how the table functions worked, I did not use this function in my final code.
By doing a text I was able to accustom myself to using the table functions as well as how I could adjust the coordinates to print my data.

(Add scs)

### Creating my Functions
The first function I wrote was for printing 





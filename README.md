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

## Creating my Functions
The first function I wrote was for printing my album covers, I wanted the sizing of the images to be dynamic, changing appropriately whenever the window was resized.
For this I wrote a window resized function and many changing values within my printing images function.

(Add sc)

I set my default album size to be 1/12th of the window width, I also wrote a space varible to dictate the amount of space between my albums as well as on the sides of the screen. 
I wanted some space to place text so I set the y position to leave a fourth of the canvas blank at the bottom.
I adjusted these values multiple times and settled on what looked the best to me.

After writing my function I tested it with multiple window sizes to see how well it worked.

(add sc)


### Making my bar graph + problems I faced

After I was sure that my album covers function worked properly I started writing my bar graph function.
Here is how I originally wrote my function:

(Add sc)

The function takes multiple values, using these to adjust the sizing and placement of my notes accoringing to the coordinates and values calculated in my album covers function.
The function is also called within the album covers function as it relies on it to work.

Writing the function like this caused many problems, the random value for the notes were refreshing very quickly and they were not being printed up the y axis.

(Add sc)

I fixed the problem with my y axis easily as I hadn't calculated the changing values properly, I adjusted the current_y to decrease according to the note size each for loop.

(Add sc)

At first I set the number of my notes to be ((the number of notes) minus (the number of notes mod 5)) divided by 5 but found the graph to be too small so I decided to use the actual values.

(add pic)

Adjusting the sizing of the notes also caused me lot's of problems, I was stuck on calculating the note size incorrectly for a long time as I only accounted for the space I wanted to lave free on the top of the canvas, while forgetting the space below the first y position I had set, so the note size was too big to print the information correctly before reaching the designated blank space.
As you see above, the first column is is forced to stop printing notes prematurely as the note size is too big to accomodate for the amount that must be printed.

I was about to give up because the graphs still showed that correct order of albums, the top played album and the least played album clearly being biggest and smalled bars, but I ended up figuring out where I was going wrong and was able to display the correct amount of musical notes.

(add sc)

### Displaying text
After I figured out the problem with my bar graph I wrote a text function which would take the first x position of the album covers to print a message at the bottom of the screen.
This function was is also called within the album cover function.

(Add sc)

## What I learned, what I did wrong, and how I would expand this sketch

I think the most important thing I learned from this workshop was that I should properly calculate my values rather than write down random equations hoping that they would work.

I think a mistake I made with this workshop was using the data set I chose to use, I only had one row of data meaning I didn't get to experiment as much with traversing the table as much as I could have.
More complex data visualisation is definitely something I want to encorporate into my work.

After I figured my note sizing out I did want to expand this sketch by adding some user interaction.
I wanted to create a simple function where album covers would initially be blurred, with the user being able to turn the blur off by clicking the screen.











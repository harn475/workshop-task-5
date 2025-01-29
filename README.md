# workshop-task-5
https://harn475.github.io/workshop-task-5/
# Data Visualisation
Link to forked webpage --> (https://glovving.github.io/workshop-task-5/)

## Overview

This p5.js sketch visualizes movie data based on how many times each movie has been watched, with a star-based rating system. The project displays movie posters of various Disney movies along with star ratings representing the number of views (where 1 star = 10 views). The aesthetic inspiration for this project came from the images at the bottom of the screen, which set the tone for the visual style.

This project was forked from a previous work, and the primary inspiration came from the idea of displaying images alongside some interactive elements to represent data visually. The star-rating mechanism for movie views was the main feature added to enhance the user experience.

## Features

- **Movie Posters**: Displays posters of 7 different movies in a horizontal layout.
- **Star Ratings**: Each poster has a rating above it in the form of stars. The number of stars corresponds to the number of times the movie has been watched (in multiples of 10).
- **Responsive Layout**: The canvas resizes according to the window size, making it adaptable to different screen resolutions.
- **Data Handling**: Movie view data is loaded from a CSV file and used to populate the star ratings.

## Progress (Problem Solving/Code)

- **CSV Data Loading**: The movie data is loaded from a CSV file containing the number of views for each movie. The `loadTable` function was used to load and parse the data. 
- **Movie Poster Display**: The movie posters were dynamically loaded and displayed on the canvas using the `image()` function. The posters are resized based on the canvas size and displayed in a row.
- **Star Rating**: Each movie’s view count is visualized using a star-based system, where each star represents 10 views. The number of stars is dynamically calculated based on the data from the CSV.
- **Dynamic Layout**: The canvas and movie poster layout dynamically adjust to the window size using the `windowResized()` function.
  
## Issues Faced

During the development of this project, I struggled with an issue where the movie data wasn't loading correctly. After several attempts, I realized the issue was due to the inclusion of unnecessary spaces in the CSV file, which caused the `findRow` function to fail. Once I cleaned up the CSV file by removing the spaces, everything worked as expected.

## Final Coding Comments

- **Responsive Layout**: The layout is responsive, and the posters are positioned based on the window size. The `resizeCanvas()` function ensures that the layout adjusts appropriately when the window is resized.
- **Star System**: The star system works smoothly, and the stars are drawn dynamically above each movie poster based on the view count.
- **Code Modularity**: The `moviePosters()` function handles the display of the posters and stars, while the `drawStars()` function manages the drawing of individual stars.
  
## Future Development

- **Title Appearance**: If I could change anything, it would be the appearance of the movie title. I feel the current presentation could be more visually engaging by improving the typography and overall text styling.
- **Improved Data Interaction**: In the future, I could add functionality to interactively change the number of views for each movie and see the changes reflected in real-time.
- **Additional Features**: Adding movie genres, plot summaries, or user ratings would provide more depth to the project, making it a more interactive movie tracker.

## Reflection

This project was a great learning experience in working with data visualization and interactive elements in p5.js. The process was challenging, especially due to issues with the CSV file, but after figuring out the problem, I was able to implement a working solution. I also gained more experience in handling images, dynamic layouts, and text drawing in p5.js. If I had more time, I would focus on enhancing the design elements, particularly the movie title presentation.


**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit Users.
---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.








## What is Tetris?
Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible. The player can get rid of these blocks by fitting all the blocks in a row and earn points.

![Image of My Tetris](https://github.com/hungle2396/my-tetris/blob/main/src/img/my_tetris_github.png)
## Where Can I Play It?
I deployed the application on Netlify, so it's as easy as click and play:
[My Tetris](https://tetris96.netlify.app/)

## I Want to Play It using my editor
1. First you have to install node.js
2. Then, in your terminal, type in "npm install" in your editor for the terminal to download the npm_module
3. After that, in your terminal, type in "npm run build", webpack will build a dist folder with all the necessary files to display it on the browser
4. Finally, in your terminal, type in "npm run start", this will automatically open a localhost:3000 or localhost:8080 and render the game
6. Enjoy the game!

## Read the code
Because I used Webpack to compile all my files into a single javascript, it is very hard to read the final javascript file.

1. Please go to the "src" folder.
2. You should see a bunch of folders including audio, img, sass, Tetris_Font, and ts.
3. It is the MVC architecture, app.ts as the "controller", model files in the models folder make the gameplay logic and create tetrominos, and views folder have files that render the game.
4. Sass folder has all the .scss files that convert to a single css file in the dist folder.
5. template.html is the original html file that will render to the browser.

## What Languages Did I use to implement this application?
1. Typescript
2. HTML5
3. Sass
4. Webpack

## How was the process of implementing this application?
- First I started reading how the game work and how it is structured
- Then I started drawing out the layout, the tetrominos, the container, the buttons
- After that, I started to implement it with HTML5 and Sass
- When I done with the basic layout and how it looks on the browser, I started using Typescript to create the container, tetrominoes, its colors, and how the game logic work.
- Last but not least, I spent a lot of time designing how it looks and feels, with the Font style and audio.

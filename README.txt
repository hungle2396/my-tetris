Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible. The player can get rid of these blocks by fitting all the blocks in a row and earn points.

You can play it on Netlify: https://tetris96.netlify.app/

*** Please install npm module first before you play if using an editor!***
Type in "npm install" in your vscode for the terminal to down the npm_module

***** Instruction to PLAY *******
1. open the "dist" folder.
2. Look for the index.html file.
3. Open that file to the browser.
4. Have fun playing!


***** Read the code *****
Because I used Webpack to compile all my files into a single javascript, it is very hard to read the final javascript file.

1. Please go to the "src" folder.
2. You should have see typescript files.
3. It is the MVC architecture, app.ts as the "controller", model files in the models folder make the gameplay logic and create tetrominos, and views folder have files that render the game.
4. Sass folder has all the .scss files that convert to a single css file in the dist folder.
5. template.html is the original html file.

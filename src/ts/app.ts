import "../sass/main.scss";

import * as model_CreateTetrominos from "./models/model_CreateTetrominos";
import * as model_Game_Logic from "./models/model_Game_Logic";
import * as model_Mapping from "./models/model_Mapping";
import * as model_Audio from "./models/model_Audio";
import * as view_CreateBlocks from "./views/view_CreateBlocks";
import * as view_base from "./views/view_Base";

/** Global state of the app
 * - has the array of the tetris blocks
 */
export let state: any = {};

// start the game
const game_start = () => {

    if (!state.game_playing) {
        state.tetris_music = model_Audio.restart_tetris_song();
        clearInterval(state.time);
        state.time = null;
        /** 1. Create the grid blocks **/
        // 1.1 Clear the existing blocks before starting a new game
        state.tetris_music = model_Audio.play_tetris_song();
        view_CreateBlocks.clear_tetris_grid();

        state.game_playing = true;
        // 1.2 Create the grid model and preview tetromino grid
        view_CreateBlocks.create_tetris_grid(400);
        
        // 1.3 - Putting in the new property in the tetris object
        view_base.elements.tetris_main_blocks = document.querySelectorAll(".tetris__Container--block") as NodeListOf<HTMLElement>;

        view_base.elements.tetris_preview_blocks = document.querySelectorAll(".right__Container__tetris--block") as NodeListOf<HTMLElement>;

        // 1.4 - store them into a tetris array
        state.tetris_array_blocks = Array.from(view_base.elements.tetris_main_blocks);

        state.tetris_preview_array_blocks = Array.from(view_base.elements.tetris_preview_blocks);

        // Reset the game score, lines, and level
        state.score = 0;
        state.lines = 0;
        state.level = 1;
        state.difficulty_array_score = [500, 1000, 2000, 3500, 5000, 7000, 9000, 12000];
        state.falling_speed = [700, 600, 500, 400, 300, 200, 100, 50];
        
        /** 2. Create/initialize a random tetromino model **/
        state.next_random_tetromino = model_CreateTetrominos.get_random_number();
        model_Game_Logic.create_tetrominos();   
    }
}

// click on the pause button
view_base.elements.tetris_pause.addEventListener("click", () => {

    if (state.game_playing) {
        view_base.elements.tetris_pause.innerHTML = "pausing";
        view_base.elements.tetris_pause.style.color = "#FF4136";
        view_base.elements.tetris_start.style.color = "#757373";
        model_Audio.stop_tetris_song();
        model_Audio.play_tetris_pause();
        
        clearInterval(state.time);
    }
});

// click on resume button
view_base.elements.tetris_resume.addEventListener("click", () => {

    if (state.game_playing) {
        view_base.elements.tetris_pause.innerHTML = "pause";
        view_base.elements.tetris_pause.style.color = "#757373";
        view_base.elements.tetris_start.style.color = "#01FF70";
        state.tetris_music = model_Audio.play_tetris_song();
        state.time = setInterval(model_Game_Logic.moving_down_tetromino, 500);
    }
    
});

// click on the specific key for mapping
document.addEventListener("keydown", (event: KeyboardEvent) => {

    if (state.game_playing) {
        if (event.key === "ArrowLeft") {
            model_Mapping.move_left();
        }
        
        if (event.key === "ArrowRight") {
            model_Mapping.move_right();
        }
        
        if (event.key === "ArrowUp") {
            model_Mapping.rotate_position();
        }
    
        if (event.key === "ArrowDown") {
            model_Mapping.move_down_fast();
        }
    }
});

// click on the quit button
view_base.elements.tetris_quit.addEventListener("click", () => {
    if (state.game_playing) {
        clearInterval(state.time);
        view_base.elements.tetris_gameover.style.display = "block";
        view_base.elements.tetris_start.innerHTML = "start";
        view_base.elements.tetris_pause.innerHTML = "pause";
        view_base.elements.tetris_start.style.color = "#757373";
        view_base.elements.tetris_pause.style.color = "#757373";
        state.tetris_music = model_Audio.stop_tetris_song();
        model_Audio.play_tetris_gameover();
        state.game_playing = false;
    }
})

// Start The game button
view_base.elements.tetris_start.addEventListener("click", (event: Event) => {

    if (!state.game_playing) {
        event.preventDefault();
        view_base.elements.tetris_gameover.style.display = "none";
        view_base.elements.tetris_start.innerHTML = "playing";
        view_base.elements.tetris_start.style.color = "#01FF70";
        model_Audio.stop_tetris_intro();
        game_start();
    }
});


// Game over / play again button
view_base.elements.tetris_play_again.addEventListener("click", () => {
    view_base.elements.tetris_gameover.style.display = "none";
    view_base.elements.tetris_start.innerHTML = "playing";
    view_base.elements.tetris_start.style.color = "#01FF70";
    game_start();
});

state.game_playing = false;

if (!state.game_playing) {
    model_Audio.play_tetris_intro();
}

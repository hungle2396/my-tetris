import { state } from "../app";
import * as view_base from "../views/view_Base";
import * as model_CreateTetrominos from "../models/model_CreateTetrominos";
import * as model_Audio from "./model_Audio";
import * as view_CreateTetrominos from "../views/view_CreateTetrominos";


const game_over = () => {
    if (state.tetromino.tetromino_modified_position.some((current_position: number) => current_position <= 199)) {
        console.log(`Game over checked`);
        clearInterval(state.time);
        state.tetris_song = model_Audio.stop_tetris_song();
        state.game_playing = false;
        view_base.elements.tetris_gameover.style.display = "block";
        view_base.elements.tetris_start.innerHTML = "start";
        view_base.elements.tetris_start.style.color = "#757373";
        model_Audio.play_tetris_gameover();
    }
}

const add_score = () => {
    console.log(`In add score`);
    let row_clear = 0;
    for (let index = 0; index < 399; index += 10) {
        const row = [index, index + 1, index + 2, index + 3, index + 4, index + 5, index + 6, index + 7, index + 8, index + 9];

        if (row.every(index => state.tetris_array_blocks[index].classList.contains("barrier"))) {
            // Update the score, lines
            state.lines += 1;
            row_clear += 1;
            // Render the new score
            view_base.elements.tetris_Score.innerHTML = state.score;
            view_base.elements.tetris_Lines.innerHTML = state.lines;

            // Remove the html class barrier of that row
            row.forEach((index) => {
                state.tetris_array_blocks[index].classList.remove("barrier");
                state.tetris_array_blocks[index].classList.remove("tetromino__blue", "tetromino__cyan", "tetromino__orange", "tetromino__yellow", "tetromino__purple", "tetromino__red", "tetromino__green");
            });

            // Remove 10 indexes starting from index example) 190 - 199
            const barriers_removed = state.tetris_array_blocks.splice(index, 10);

            state.tetris_array_blocks = barriers_removed.concat(state.tetris_array_blocks);

            state.tetris_array_blocks.forEach((cell: any) => view_base.elements.tetris_main_Grid.appendChild(cell));

            state.score += (row_clear *  100);
        }
    }

    if (row_clear === 1) {
        model_Audio.play_tetris_single_clear();
    } else if (row_clear === 2) {
        model_Audio.play_tetris_double_clear();
        setTimeout(() => {
            model_Audio.play_tetris_noice();
        }, 1000);
        
    } else if (row_clear === 3) {
        model_Audio.play_tetris_triple_clear();
        setTimeout(() => {
            model_Audio.play_tetris_impressive();
        }, 1000);
    } else if (row_clear === 4) {
        model_Audio.play_tetris_tetris_clear();
        setTimeout(() => {
            model_Audio.play_tetris_excellence();
        }, 1000);
    }
    
    if (state.score >= state.difficulty_array_score[state.level - 1]) {
        state.level += 1;
        view_base.elements.tetris_Level.innerHTML = state.level;
        console.log(state.falling_speed[state.level - 1]);
        model_Audio.play_tetris_level_up();
    }
}

export const moving_down_tetromino = () => {
    // 1. Check for barrier in the next row
    if (state.tetromino.tetromino_modified_position.some((current_position: number) => state.tetris_array_blocks[current_position + 10].classList.contains("barrier"))) {
        console.log("barrier checked");
        clearInterval(state.time);
        state.time = null;
        state.tetromino.tetromino_modified_position.forEach((current_position: number) => {
            state.tetris_array_blocks[current_position].classList.add("barrier");
        });
        
        // 5. clear the preview tetromino
        view_CreateTetrominos.clear_tetromino(state.tetris_preview_array_blocks, model_CreateTetrominos.tetromino_preview_shape[state.next_random_tetromino], model_CreateTetrominos.tetrominos_array_color[state.next_random_tetromino]);
        
        model_Audio.play_tetris_landing();
        add_score();
        game_over();

        if (state.game_playing) {
            console.log(`In game_Playing is true`);
            create_tetrominos();
        }
    }
    // 1. Remove the tetromino from the UI
    view_CreateTetrominos.clear_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);

    state.tetromino.down_index_counter += 10;

    // 2. move the tetromino down to the next index
    state.tetromino.tetromino_modified_position = state.tetromino.tetromino_initial_position.map( (current_index: number) => current_index = current_index + state.tetromino.down_index_counter - state.tetromino.left_index_counter + state.tetromino.right_index_counter);

    // console.log(state.tetromino.tetromino_modified_position);
    
    // 3. Render the tetromino to the UI
    view_CreateTetrominos.render_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);
}

export const create_tetrominos = () => {
    // 1. Current random tetromino that will fall
    const random_tetromino_index = state.next_random_tetromino;

    // 2. Create the next random tetromino model to display on the side
    state.next_random_tetromino = model_CreateTetrominos.get_random_number();
    
    state.tetromino = new model_CreateTetrominos.Tetromino(random_tetromino_index);

    // 3. Render the the initial tetromino and preview tetromino
    view_CreateTetrominos.render_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);

    view_CreateTetrominos.render_tetromino(state.tetris_preview_array_blocks, model_CreateTetrominos.tetromino_preview_shape[state.next_random_tetromino], model_CreateTetrominos.tetrominos_array_color[state.next_random_tetromino]);

    // 4. Move the tetromino down
    state.time = setInterval(moving_down_tetromino, state.falling_speed[state.level - 1]);
}
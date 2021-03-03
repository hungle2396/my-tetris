import * as model_Audio from "../models/model_Audio";
import * as model_Game_Logic from "../models/model_Game_Logic";
import * as view_CreateTetrominos from "../views/view_CreateTetrominos";
import * as view_base from "../views/view_Base";
import { state } from "../app";

// move tetromino when press left key
export const move_left = () => {
    model_Audio.play_tetris_move();
    view_CreateTetrominos.clear_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);

    const at_left_edge = state.tetromino.tetromino_modified_position.some((element: number) => element % 10 === 0);

    if (!at_left_edge) {
        state.tetromino.left_index_counter++;
        state.tetromino.tetromino_modified_position.forEach((element: number, index: number, theArray: number[]) => {
            theArray[index] = element - 1;
        })
    }

    if (state.tetromino.tetromino_modified_position.some((element: number) => state.tetris_array_blocks[element].classList.contains("barrier"))) {
        console.log(`collision checked`);
        state.tetromino.tetromino_modified_position.forEach((element: number, index: number, theArray: number[]) => {
            theArray[index] = element + 1;
        });
        state.tetromino.left_index_counter--;
    }   

    view_CreateTetrominos.render_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);
}

// move the tetromino to the right when press right key
export const move_right = () => {
    
    model_Audio.play_tetris_move();
    view_CreateTetrominos.clear_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);

    const at_right_edge = state.tetromino.tetromino_modified_position.some((element: number) => element % 10 === 9);

    if (!at_right_edge) {
        state.tetromino.right_index_counter++;
        state.tetromino.tetromino_modified_position.forEach((element: number, index: number, theArray: number[]) => {
            theArray[index] = element + 1;
        })
    }

    if (state.tetromino.tetromino_modified_position.some((element: number) => state.tetris_array_blocks[element].classList.contains("barrier"))) {
        console.log(`collision checked`);
        state.tetromino.tetromino_modified_position.forEach((element: number, index: number, theArray: number[]) => {
            theArray[index] = element - 1;
        })
        state.tetromino.right_index_counter--;
    }

    view_CreateTetrominos.render_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);
}

// rotate the tetromino when press up key
export const rotate_position = () => {
    
    const at_left_edge = state.tetromino.tetromino_modified_position.some((element: number) => element % 10 === 0);

    const at_right_edge = state.tetromino.tetromino_modified_position.some((element: number) => element % 10 === 9);

    if (!at_left_edge && !at_right_edge) {
        console.log("up arrow works!");
        view_CreateTetrominos.clear_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);

        if (state.tetromino.tetromino_position_index === 3) {
            state.tetromino.tetromino_position_index = 0;
        } else {
            state.tetromino.tetromino_position_index++;
        }
        
        state.tetromino.tetromino_initial_position = state.tetromino.tetromino_positions[state.tetromino.tetromino_position_index];

        state.tetromino.tetromino_modified_position = state.tetromino.tetromino_initial_position.map( (current_index: number) => current_index = current_index + state.tetromino.down_index_counter - state.tetromino.left_index_counter + state.tetromino.right_index_counter);

        console.log(state);
        view_CreateTetrominos.render_tetromino(state.tetris_array_blocks, state.tetromino.tetromino_modified_position, state.tetromino.tetromino_color);
        model_Audio.play_tetris_rotate();
    }
    
}

// Move the tetromino down when press down key 
export const move_down_fast = () => {
    // Remove the tetromino
    state.score += 1;
    view_base.elements.tetris_Score.innerHTML = state.score;
    model_Game_Logic.moving_down_tetromino();
}
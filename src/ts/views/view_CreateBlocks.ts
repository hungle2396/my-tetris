import * as view_Base from "./view_Base";

export const clear_tetris_grid = () => {
    view_Base.elements.tetris_main_Grid.innerHTML = "";
    view_Base.elements.tetris_preview_Grid.innerHTML = "";
    view_Base.elements.tetris_Score.innerHTML = "0";
}

const render_tetris_main_grid = () => {
    const markup = `
        <div class="tetris__Container--block"></div>
    `;

    view_Base.elements.tetris_main_Grid.insertAdjacentHTML("beforeend", markup);
};

const render_game_over_barrier = () => {
    const markup = `
        <div class="tetris__Container--block gameOver__barrier"></div>
    `;

    view_Base.elements.tetris_main_Grid.insertAdjacentHTML("beforeend", markup);
}

const render_tetris_barrier = () => {
    const markup = `
        <div class="tetris__Container--block barrier barrier_1"></div>
    `;

    view_Base.elements.tetris_main_Grid.insertAdjacentHTML("beforeend", markup);
}

const render_upcoming_tetromino_grid = () => {
    const markup = `
        <div class="right__Container__tetris--block"></div>
    `;

    view_Base.elements.tetris_preview_Grid.insertAdjacentHTML("beforeend", markup);
}

export const create_tetris_grid = (blocks: number) => {
    let index = 0;

    // 1. Create the main grid
    for (index; index < blocks; index++) {
        if (index >= 190 && index <= 199) {
            render_game_over_barrier();
        } else {
            render_tetris_main_grid();
        }
    }

    // 2. Add the game over barrier at div from 
    // 2. Create the barrier blocks under the main grid
    for (index = 0; index < 10; index++) {
        render_tetris_barrier();
    }

    // 3. Create the grid that contain the upcoming tetromino
    for (index = 0; index < 28; index++) {
        render_upcoming_tetromino_grid();
    }
};
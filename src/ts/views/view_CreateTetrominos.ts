export const render_tetromino = (tetris_grid: NodeListOf<HTMLDivElement>, tetromino_shape: number[], tetromino_color: string) => {
    tetromino_shape.forEach((current_tetromino: number) => {
        tetris_grid[current_tetromino].classList.add(`${tetromino_color}`);
    });
}

export const clear_tetromino = (tetris_grid: NodeListOf<HTMLDivElement>, tetromino_shape: number[], tetromino_color: string) => {
    tetromino_shape.forEach((current_tetromino: number) => {
        tetris_grid[current_tetromino].classList.remove(`${tetromino_color}`);
    });
}
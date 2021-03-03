// Horizontal tetrominoes
const J_tetromino = [
    [180, 190, 191, 192],
    [172, 171, 181, 191],
    [180, 181, 182, 192],
    [172, 182, 192, 191]
];

const L_tetromino = [
    [182, 192, 191, 190],
    [171, 181, 191, 192],
    [190, 180, 181, 182],
    [170, 171, 181, 191]
];

const T_tetromino = [
    [190, 191, 192, 181],
    [171, 181, 191, 182],
    [180, 181, 182, 191],
    [171, 181, 191, 180]
];


// Vertical tetrominoes
const I_tetromino = [
    [164, 174, 184, 194],
    [172, 173, 174, 175],
    [164, 174, 184, 194],
    [172, 173, 174, 175]
];

const O_tetromino = [
    [174, 175, 185, 184],
    [174, 175, 185, 184],
    [174, 175, 185, 184],
    [174, 175, 185, 184]
];

const S_tetromino = [
    [170, 180, 181, 191],
    [190, 191, 181, 182],
    [170, 180, 181, 191],
    [190, 191, 181, 182]
];

const Z_tetromino = [
    [172, 182, 181, 191],
    [180, 181, 191, 192],
    [172, 182, 181, 191],
    [180, 181, 191, 192]
];

export const tetrominos_array_color = ["tetromino__blue", "tetromino__cyan", "tetromino__orange", "tetromino__yellow", "tetromino__purple", "tetromino__red", "tetromino__green"];

// the shape of the next tetromino
export const tetromino_preview_shape = [
    [10, 14, 18, 17],
    [5, 9, 13, 17],
    [9, 13, 17, 18],
    [9, 10, 13, 14],
    [9, 13, 17, 14],
    [10, 14, 13, 17],
    [9, 13, 14, 18]
]

// the shape of the current tetromino
const tetrominos_array_shapes = [J_tetromino, I_tetromino, L_tetromino, O_tetromino, T_tetromino, Z_tetromino, S_tetromino];

// Pick a random number from 0 to 6
export const get_random_number = () => {
    let random_Number = Math.floor(Math.random() * 6) + 1;

    return random_Number;
}

// blueprint of the tetromino or class
export class Tetromino {
    tetromino_shape_index: number;
    tetromino_position_index: number = 0;
    tetromino_positions: number[][] = [];
    tetromino_initial_position: number[] = [];
    tetromino_color: string;
    tetromino_modified_position: number[] = [];
    down_index_counter: number = 0;
    left_index_counter: number = 0;
    right_index_counter: number = 0;

    constructor(tetromino_shape_index: number) {
        this.tetromino_shape_index = tetromino_shape_index;
        this.tetromino_positions = tetrominos_array_shapes[this.tetromino_shape_index];
        this.tetromino_initial_position = this.tetromino_positions[this.tetromino_position_index];
        this.tetromino_color = tetrominos_array_color[this.tetromino_shape_index];
    }
}
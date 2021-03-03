import * as view_base from "../views/view_Base";

// Play the audio
export const play_tetris_intro = () => {
    view_base.elements.tetris_intro.play();
}

export const stop_tetris_intro = () => {
    view_base.elements.tetris_intro.pause();
}

export const play_tetris_song = () => {
    view_base.elements.tetris_song.play();
}

export const stop_tetris_song = () => {
    view_base.elements.tetris_song.pause();
}

export const restart_tetris_song = () => {
    view_base.elements.tetris_song.currentTime = 0;
    view_base.elements.tetris_song.play();
}

export const play_tetris_level_up = () => {
    view_base.elements.tetris_level_up.play();
}

export const play_tetris_gameover = () => {
    view_base.elements.tetris_gameover_audio.play();
}

export const play_tetris_landing = () => {
    view_base.elements.tetris_landing_audio.play();
}

export const play_tetris_single_clear = () => {
    view_base.elements.tetris_single_row_audio.play();
}

export const play_tetris_double_clear = () => {
    view_base.elements.tetris_double_row_audio.play();
}

export const play_tetris_triple_clear = () => {
    view_base.elements.tetris_triple_row_audio.play();
}


export const play_tetris_tetris_clear = () => {
    view_base.elements.tetris_tetris_row_audio.play();
}

export const play_tetris_move = () => {
    view_base.elements.tetris_move_audio.play();
}

export const play_tetris_rotate = () => {
    view_base.elements.tetris_rotate_audio.play();
}

export const play_tetris_pause = () => {
    view_base.elements.tetris_pause_audio.play();
}

export const play_tetris_noice = () => {
    view_base.elements.tetris_noice_audio.play();
}

export const play_tetris_impressive = () => {
    view_base.elements.tetris_impressive_audio.play();
}

export const play_tetris_excellence = () => {
    view_base.elements.tetris_excellence_audio.play();
}
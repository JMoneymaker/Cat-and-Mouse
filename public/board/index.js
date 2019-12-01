import BoardApp from './BoardApp.js';

const board = new BoardApp();
document.body.prepend(board.renderDOM());
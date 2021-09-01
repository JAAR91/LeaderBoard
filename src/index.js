import printForm from './addForm.js';
import getScores from './APIhandler.js';
import printBoard from './printBoard.js';
import './styles/style.css';

getScores(printBoard);
printForm();

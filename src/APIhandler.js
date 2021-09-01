import myLeaderBoard from './loadBoard.js';
import { imgLoading } from './domloader.js';

const getScores = async (printBoard) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t5YbFcPNHxu7yajc9aCU/scores/', { mode: 'cors', method: 'GET' })
      .then((response) => response.json()).then((data) => data.result);
    myLeaderBoard.loadScores(response);
    printBoard();
  } catch (err) {
    myLeaderBoard.loadScores(null);
  }
};

export const newUserScore = async (user, score) => {
  try {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t5YbFcPNHxu7yajc9aCU/scores/', {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, score }),
    });
    getScores();
    imgLoading.classList.add('d-none');
  } catch {
    imgLoading.classList.add('d-none');
  }
};

export default getScores;
import { container } from './domloader.js';

const gameId = async () => {
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
      {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Enter new game name here' }),
      })
      .then((response) => response.json())
      .then((data) => {
        container.innerHTML += `<p class="w-100">${data.result}</p>`;
      });
  } catch {
    container.innerHTML += '<p class="w-100">Error loading the API service</p>';
  }
};

export default gameId;
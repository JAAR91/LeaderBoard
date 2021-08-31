const container = document.getElementById('container');
container.classList.add('container');

const pageTitle = document.createElement('h1');
pageTitle.textContent = 'Leaderboard';
container.appendChild(pageTitle);

const Row = document.createElement('div');
Row.classList.add('row', 'p-s', 'm-0');

container.appendChild(Row);

export default Row;
const container = document.getElementById('container');
container.classList.add('d-flex', 'flex-column', 'align-items-center');
container.classList.add('container');

const pageTitle = document.createElement('h1');
pageTitle.classList.add('w-100');
pageTitle.textContent = 'Leaderboard';
container.appendChild(pageTitle);

export const imgLoading = document.createElement('div');
imgLoading.classList.add('imgLoading', 'd-none');
container.appendChild(imgLoading);

const Row = document.createElement('div');
Row.classList.add('w-100');
Row.classList.add('row', 'p-s', 'm-0');

container.appendChild(Row);

export default Row;
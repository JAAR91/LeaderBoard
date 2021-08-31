import Row from "./domloader.js";
import myLeaderBoard from "./loadBoard.js";

myLeaderBoard.default();

const leaderBoarContainer = document.createElement('div');
leaderBoarContainer.classList.add('col-6');

const printBoard = () => {
    
    leaderBoarContainer.innerHTML = ``;

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('d-flex', 'flex-row', 'my-1',
    'p-0', 'justify-content-around', 'align-items-center');
    leaderBoarContainer.appendChild(titleContainer);

    const Title = document.createElement('h2');
    Title.textContent = 'Recent Scores';
    titleContainer.appendChild(Title);
    
    const refresBtn = document.createElement('button');
    refresBtn.textContent = 'Refresh';
    titleContainer.appendChild(refresBtn);

    const Board = document.createElement('ul');
    Board.classList.add('scores');
    leaderBoarContainer.append(Board);

    myLeaderBoard.list.forEach((user) => {
        const score = document.createElement('li');
        
        score.innerHTML = `<p class="p-2 m-0"> ${user.name}: ${user.score} </p>`;
        Board.append(score);
    });

    Row.append(leaderBoarContainer);
};

export default printBoard;

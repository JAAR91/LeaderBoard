import myLeaderBoard from "./loadBoard.js";

const getScores = async() =>{
    try {
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t5YbFcPNHxu7yajc9aCU/scores/', { mode: 'cors', method: 'GET'});
        const Data = await response.json();
        console.log(Data.result);
        myLeaderBoard.loadScores(Data.result);
    }catch (err) {
        myLeaderBoard.loadScores(null);
    }
};

export const newUserScore = (user, score) =>{
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/t5YbFcPNHxu7yajc9aCU/scores/', { mode: 'cors', method: 'POST',
    headers: {'Content-Type': 'application/json'}, body: JSON.stringify({user: user, score: score})})
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
    getScores();
};

export default getScores;
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

export default getScores;
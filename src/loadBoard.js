class LeaderBoard {
  constructor() {
    this.list = [];
  }

  new(user, score) {
    this.list.push({ user, score });
  }

  loadScores(ApiScores) {
    if (ApiScores !== null) {
      this.list = ApiScores;
    }
  }
}

const myLeaderBoard = new LeaderBoard();

export default myLeaderBoard;
class LeaderBoard {
  constructor() {
    this.list = [];
  }

  new(name, score) {
    this.list.push({ name, score });
  }

  default() {
    this.new('name', 100);
    this.new('name', 20);
    this.new('name', 50);
    this.new('name', 78);
    this.new('name', 125);
    this.new('name', 77);
    this.new('name', 42);
  }
}

const myLeaderBoard = new LeaderBoard();

export default myLeaderBoard;
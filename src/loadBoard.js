class LeaderBoard {
  constructor() {
    this.list = [];
  }

  new(name, score) {
    this.list.push({ name, score });
  }

  default() {
    this.list.push(this.new('name', 100));
    this.list.push(this.new('name', 20));
    this.list.push(this.new('name', 50));
    this.list.push(this.new('name', 78));
    this.list.push(this.new('name', 125));
    this.list.push(this.new('name', 77));
    this.list.push(this.new('name', 42));
  }
}

const myLeaderBoard = new LeaderBoard();

export default myLeaderBoard;
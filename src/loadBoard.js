class LeaderBoard {
    constructor(){
        this.list = [];
    }

    user(name, score){
        return {'name': name, 'score': score};
    }

    new(name, score){
        this.list.push(user(name,score));
    }

    default(){
        this.list.push(this.user('name', 100));
        this.list.push(this.user('name', 20));
        this.list.push(this.user('name', 50));
        this.list.push(this.user('name', 78));
        this.list.push(this.user('name', 125));
        this.list.push(this.user('name', 77));
        this.list.push(this.user('name', 42));
    }

}

let myLeaderBoard = new LeaderBoard;

export default myLeaderBoard;
import {listeningArr} from '../listening';

class ListeningTask {
    constructor() {
        this.src = null;
        this.word = null;
    }

    setValues() {
        this.src = _.sample(Object.keys(listeningArr));
        this.word = listeningArr[this.src];
    }
}

export {ListeningTask};
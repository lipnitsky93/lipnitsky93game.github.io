import {dictionary} from '../dictionary';

class DictionaryTask {
    constructor() {
        this.word = null;
        this.result = null;
    }

    setValues() {
        this.word = _.sample(Object.keys(dictionary));
        this.result = dictionary[this.word];
    }
}

export {DictionaryTask};
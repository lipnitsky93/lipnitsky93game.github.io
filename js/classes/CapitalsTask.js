import {capitals} from '../capitals';

class CapitalsTask {
    constructor() {
        this.country = null;
        this.capital = null;
    }

    setValues() {
        this.country = _.sample(Object.keys(capitals));
        this.capital = capitals[this.country];
    }
}

export {CapitalsTask};
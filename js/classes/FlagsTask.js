import {flags} from '../flags';
import {flagsSrc} from '../constants';

class FlagsTask {
    constructor() {
        this.flag = null;
        this.country = null;
    }

    setValues() {
        this.flag = _.sample(Object.keys(flags));
        this.country = flags[this.flag];
        this.img = resources.get(flagsSrc[_.indexOf(flagsSrc, this.flag)]);
    }
}

export {FlagsTask};
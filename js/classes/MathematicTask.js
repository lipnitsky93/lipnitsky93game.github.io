class MathematicTask {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.operator = null;
        this.result = null;
    }

    setIntegerResult() {
        if (this.operator === '/') {
            this.a = this.b * _.random(1,20);
            this.result = eval(this.a + this.operator + this.b);
        }
    }

    setValues() {
        this.a = _.random(1,50);
        this.b = _.random(1,50);
        this.operator = _.sample(['+', '-', '*', '/']);
        this.result = eval(this.a + this.operator + this.b);
    }


}

export {MathematicTask};
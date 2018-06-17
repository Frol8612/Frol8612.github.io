class TaskCount {
    constructor() {
        this.x = _.random(1, 100);
        this.y = _.random(1, 100);
    }

    arithmetic() {
        let i = _.random(0, 3);    
        let obj = {
            '0': {
                a: `${this.x} + ${this.y} = ?`,
                b: `${this.x + this.y}`
            },
            '1': {
                a: `${this.x} - ${this.y} = ?`,
                b: `${this.x - this.y}`
            },
            '2': {
                a: `${this.x} * ${this.y} = ?`,
                b: `${this.x * this.y}`
            },
            '3': {
                a: `${this.x} / ${this.y} = ?`,
                b: `${_.round(this.x / this.y, 2)}`
            }
        }
 
        return [obj[i].a, obj[i].b];
    }
}



export default TaskCount;

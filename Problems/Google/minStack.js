class MinStack {
    constructor() {
        this.value = null;
        this.rest = null;
        this.min = null;
    }
    
    push(val) {
        const stack = new MinStack();
        stack.value = this.value;
        stack.rest = this.rest;
        stack.min = this.min;
        this.value = val;
        this.rest = stack;
        this.min = this.min != null ? Math.min(this.min, val) : val;
    }
    
    pop() {
        this.value = this.rest.value;
        this.min = this.rest.min;
        this.rest = this.rest.rest;
    }
    
    top() {
        return this.value;
    }
    
    getMin() {
        return this.min;
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
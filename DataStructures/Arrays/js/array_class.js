class Array {
    constructor(...elems) {
        this.elems = elems;
        this.len;
    }

    *getElems() {  // * is needed to implement a generator
        for (const elem of this.elems) 
            {yield elem;}
    }

    getElem(pos) {
        for (let i=0; i<this.elems.length; i++) {
            if (i==pos) return this.elems[i];
        }
        return null;
    }

    addElem(elem) {
        this.elems.push(elem);
        this.len;
    }
    
    lastElem() {return this.elems[this.len-1]}
    
    get last() {
        return this.lastElem();
    }

    get len() {
        this._len = this.elems.length;
        return this._len;
    }

    insertElem(elem, pos) {
        let new_arr = [];
        if(pos >= 0 && pos < this._len){
            for (let i=0; i<this._len; i++) {
                if(i!=pos) new_arr.push(this.elems[i]);
                else new_arr.push(elem);
            }
            this.len;
            this.elems = new_arr;
            return new_arr;
        }
        else {
            // throw new Error(`Insert position ${pos} is out of range.`);
            this.addElem(elem);
            return `Insert position ${pos} is out of range. ${elem} appended to the end.`;
        }
    }

    insertElem_explWay(a, i) {
        this.arr = [...this.arr.slice(0,i), a, ...this.arr.slice(i)]
        return this.arr
    }

    searchElem(elem) {
        for(let i=0; i<this._len;i++) {
            if(elem == this.elems[i]) return i;
        }
        return `Element ${elem} not present in the array`;

    }
}

let arr = new Array(1, 2, 3, 4);

console.log(arr.elems);
console.log(arr.getElems());
console.log([...arr.getElems()]);
console.log(arr.getElem(0));
console.log(arr.len);
console.log(arr.getElem(9));

arr.addElem(12)
console.log(arr.len);
console.log(arr.last);
console.log(arr.insertElem(123, 2));
console.log(arr.insertElem(10, 100)); // Error
console.log(arr.searchElem(2));
console.log(arr.searchElem(100));

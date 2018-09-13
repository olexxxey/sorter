class Sorter {
  constructor() {
    this.array = [];
  }
  
  add(element) {
    this.array.push(element);
  }
  
  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }
  
  toArray() {
    return this.array;
  }
  
  sort(indices) {
    const elements = indices.map(index => this.array[index]).sort(this.comparator || ((a, b) => a - b));
    indices.sort().forEach((index, i) => {
 this.array[index] = elements[i];
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;
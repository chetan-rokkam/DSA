class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
  }

  
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  set(key, value) {
    const index = this._hash(key);
    
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let pair of bucket) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined; 
  }
}

const myMap = new HashTable(5);
myMap.set("name", "Gemini");
myMap.set("role", "AI Partner");
myMap.set("lane", "DataStructures");

console.log(myMap.get("name"));

console.log(myMap.get("role"));

console.log(myMap.get("lane"));
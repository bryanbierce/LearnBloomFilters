// The BloomFilter contstructor expects 2 things; m, which is the number of
// positions in the filter data set, and an array of hashing functions.
var BloomFilter = function(m, hashingFunctions) {
  // The bit array object that holds the results of the bloom filter hashing
  // should go under the property _storage.
  this._storage = new BitArray(m);
  this.hashingFunc = hashingFunctions;
  this.bits = m;
  // Don't forget to grab the parameters from the constructor call and assign
  // them!
};

// Your methods go here! Good luck!
BloomFilter.prototype.test = function(value){
  for(var i = 0; i < this.hashingFunc.length; i++){
    var indexToFlip = this.hashingFunc[i](this.bits, value);
    if(!this._storage.check(indexToFlip)){
      return false;
    }
  }
  return true;
};

BloomFilter.prototype.add = function(value){

  for(var i = 0; i < this.hashingFunc.length; i++){
    var indexToFlip = this.hashingFunc[i](this.bits, value);
    this._storage.flipOn(indexToFlip);
  }
};
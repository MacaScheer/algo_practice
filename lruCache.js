#!/usr/bin/env node
'use strict';

/*This problem was asked by Google.

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

set(key, value): sets key to value. 
If there are already n items in the cache and we are adding a new item, 
then it should also remove the least recently used item.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.*/


/*
The Map object holds key-value pairs and remembers the original insertion order 
of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

Map.prototype.clear()
Removes all key-value pairs from the Map object.

Map.prototype.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.

Map.prototype.get(key)
Returns the value associated to the key, or undefined if there is none.

Map.prototype.has(key)
Returns a boolean asserting whether a value has been associated to the key in the Map object or not.

Map.prototype.set(key, value)
Sets the value for the key in the Map object. Returns the Map object.
*/
class LRUCache {
    constructor(n) {
        this.max = n;
        this.cache = new Map();
    }
    first() {
        return this.cache.keys().next().value;
    }
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size == this.max) {
            this.cache.delete(this.first());
            this.cache.set(key, value)
        }
    }
    get(key) {
        let item = this.cache.get(key);
        if (item) {
            this.cache.delete(key, value);
            this.cache.set(key, item)
        }
        return item;
    }
}
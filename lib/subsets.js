function subsets(arr) {
    if (arr.length === 0) return [[]];
    let first = arr[0];

    let subs = subsets(arr.slice(1));
    let newSubs = subs.map(s => s.concat([first]))
    return newSubs.concat(subs);
}

// console.log(subsets([2,3,4]))




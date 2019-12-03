// import merge from "lodash/merge";

let obj1 = {
  b: [1, 2, 3, 4, 5, 6],
  c: [45, 66, 3, 55]
};
let obj2 = { b: [90, 0, "lol"] };
let posts = obj1["b"].concat(obj2["b"]);
console.log("POSTS: ", posts);
obj1["b"] = posts;
console.log(("obj1", obj1));
let newState = Object.assign({}, obj2, obj1);
console.log(newState);

//  * sets`value` at the given`path` in `obj`.
// Take a look at the test cases written below the function
//     to understand the input and result of the function*/
// function deepSet(obj, path, value) {
//   let pathArr = path.split(".");
//   let nestedLevel = pathArr.length;
//   let level;
//     for (let i = 0; i < nestedLevel; i++) {
//     //   let levelVal =
//     let level = pathArr[i];
//     obj[level] = {};
//   }
//   obj[level] = value;
//   console.log("OBJECT: ", obj);
// }
pathArr = "foo"-- > "bar"-- > "baz";

function makeTree(path, obj = {}) {}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
    
    buildTree(path) {
        
    }
}

function deepSet(obj, path, value) {
  let pathArr = path.split(".");
  console.log("pathArr", pathArr);
  //   if (pathArr.length === 1) {
  //     obj[path] = value;
  //   }
  let key;

  for (let i = 0; i < pathArr.length; i++) {
    key = pathArr[i];
    obj[key];
  }
  //   let last = pathArr.pop();
  //   obj[pathArr[last]] = {};
  console.log("object", obj);
  //   return deepSet(obj, pathArr.join("."), value);
  //   return obj;
}

const testObject = {};
console.log(deepSet(testObject, "foo.bar.baz", "hello"));
// assert(
//   () => deepSet(testObject, "foo", 10),
//   () => testObject.foo === 10
// );
// assert(
//   () => deepSet(testObject, "foo", 20),
//   () => testObject.foo === 20
// );
// assert(
//   () => deepSet(testObject, "foo.bar.baz", "hello"),
//   () => testObject.foo.bar.baz === "hello"
// );
// assert(
//   () => deepSet(testObject, "foo.bar.biz", "world"),
//   () => testObject.foo.bar.baz === "hello",
//   () => testObject.foo.bar.biz === "world"
// );
// assert(
//   () => deepSet(testObject, "bar.foo", 30),
//   () => testObject.bar.foo === 30,
//   () => testObject.foo.bar.baz === "hello"
// );

// assert(
//   () => deepSet(testObject, "bar.foo", null),
//   () => !("foo" in testObject.bar)
// );
// assert(
//   () => deepSet(testObject, "foo.bar", null),
//   () => !("bar" in testObject.foo)
// );
// assert(
//   () => deepSet(testObject, "bar.foo", ""),
//   () => testObject.bar.foo === ""
// );
// assert(
//   () => deepSet(testObject, "foo", false),
//   () => testObject.foo === false
// );

// // test: set value in array at path
// assert(
//   () => deepSet(testObject, "bar.baz[3]", 40),
//   () => testObject.bar.baz[3] === 40
// );
// assert(
//   () => deepSet(testObject, "bar.baz[0]", 50),
//   () => testObject.bar.baz[0] === 50,
//   () => testObject.bar.baz[3] === 40
// );
// assert(
//   () => deepSet(testObject, "bar.baz[3]", undefined),
//   () => !(3 in testObject.bar.baz)
// );
// assert(
//   () => deepSet(testObject, "bar.baz[1].foo", 60),
//   () => testObject.bar.baz[1].foo === 60
// );

// function assert(invocation, ...expectations) {
//   let actual;
//   try {
//     actual = invocation();
//   } catch (e) {
//     console.error(
//       `${invocation.toString().replace("() => ", "")} failed with exception:`,
//       e
//     );
//   }

//   expectations.forEach(expectation => {
//     try {
//       if (!expectation(actual)) {
//         console.error(
//           `${invocation.toString().replace("() => ", "")} failed:`,
//           expectation.toString().replace(/^\(.*?\)\s*=>\s*/, ""),
//           "is false"
//         );
//       } else {
//         console.log(`${invocation.toString().replace("() => ", "")} passed`);
//       }
//     } catch (e) {
//       console.error(
//         `${expectation
//           .toString()
//           .replace(/^\((actual)?\)\s*=>\s*/, "")} failed:`,
//         e.message
//       );
//     }
//   });
// }

import LinkedList from "./linkedList.js";

// Tests
const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.head()); // return head Node
console.log(linkedList.tail()); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains("test1")); // true
console.log(linkedList.find("test2")); // 1
linkedList.prepend("test3");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
linkedList.insertAt("test4",2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
linkedList.insertAt("test5",8);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null
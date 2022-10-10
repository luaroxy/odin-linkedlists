import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");;
linkedList.append("test3");

console.log(linkedList);
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(3));
linkedList.pop();
console.log(linkedList);
console.log(linkedList.contains("test1"));
console.log(linkedList.find("test2"));
console.log(linkedList.toString());
linkedList.prepend("test3");
console.log(linkedList.toString());
linkedList.insertAt("test4",2);
console.log(linkedList.toString());
linkedList.insertAt("test5",8);
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());
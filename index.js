import LinkedList from "./linkedList.js";
import Node from "./node.js";

const linkedList = new LinkedList();
const newNode = new Node("test1");
const head = linkedList.prepend(newNode);

const newNode2 = new Node("test2");
const nodee = linkedList.append(newNode2);

const newNode3 = new Node("test3");
const nodee2 = linkedList.append(newNode3);

console.log(linkedList);
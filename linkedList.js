export default class LinkedList
{
    constructor()
    {
        this.head = {};
    }
    
    prepend(node){
        this.head = node;
    }

    append(node){
        if(this.head == null) this.prepend(node); 
        else {
            let tmp = this.head;
            while(tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = node;
        }
    }
}
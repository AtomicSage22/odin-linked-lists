class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(value){
        let tempValHolder = this.head;
        this.head = new Node(value);
        this.head.nextNode = tempValHolder;
        this.size++;
    }

    append(value){
        let node = this.head;
        if (node == null){
            this.head = new Node(value);
        }
        else{
            while(node!= null){
                if(node.nextNode == null)
                {
                    break
                }
                node = node.nextNode;
            }
            node.nextNode = new Node(value);
        }
        this.size++;
    }
    
    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    at(index){
        let node = this.head;
        let count = 0;
        while(count != index){
            node = node.nextNode;
            count++;
        }
        return node;
    }

    insertAt(value, index){
        let node = this.head;
        let count = 0;
        while(count != (index - 1)){
            node = node.nextNode;
            count++;
        }
        let tempValHolder = node.nextNode;
        node.nextNode = new Node(value);
        node.nextNode.nextNode = tempValHolder;
        this.size++;
    }

    removeAt(index){
        let node = this.head;
        let count = 0;
        while(count != (index - 1)){
            node = node.nextNode;
            count++;
        }
        node.nextNode = node.nextNode.nextNode;
        this.size--;
    }

    tail(){
        let node = this.head;
        while(node != null){
            if(node.nextNode == null){
                break
            }
            node = node.nextNode;
        }
        return node;
    }

    pop(){
        let node = this.head;
        let count = 0;
        while(count != (this.size - 2)){
            node = node.nextNode;
        }
        node.nextNode = null;
        this.size--;
    }

    contains(value){
        let node = this.head;
        let found = false;
        while(node != null){
            if (node.value == value)
            {
                found = true;
            }
            node = node.nextNode;
        }
       return found;
    }

    find(value){
        let node = this.head;
        let found = false;
        while(node != null){
            if (node.value == value)
            {
                found = true;
                break;
            }
            node = node.nextNode;
        }
        if(found == true){
            return node;
        }
        return null;
    }

    toString(){
        let node = this.head.nextNode;
        let printString = `( ${this.head.value} )`;
        while(node != null){
            printString = printString + `-> ( ${node.value} )`;
            node = node.nextNode; 
        }
        console.log(printString);
    }
}


class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
    
}
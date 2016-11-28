var currentNode;
function Node(data) {
    this.data = data;
    this.next = null;
}
 
function SinglyLinkedList() {
    this._length = 0;
    this.head = null;
}
 
SinglyLinkedList.prototype.addLast = function(value) {
        var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return head;
};

SinglyLinkedList.prototype.addFirst = function(value) {

    var node = new Node(value),
        currentNode = this.head;
        
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
        //console.log(this.head);
        return node;
        
    }
    else{ node.next=head;
        head=node;
        this._length++;
        return node;
    }  
};

SinglyLinkedList.prototype.deleteFirst = function(value) {
    var node = new Node(value),
    currentNode = this.head;
 
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
 
        return node;
    }
 
    // 2nd use-case: a non-empty list
    else{
    currentNode=currentNode.next;
    this._length--;
    return currentNode;
    }
};
//alert( new SinglyLinkedList().add("3").data);
function showTextBox(value){
    if(value=="1" || value=="2" || value=="5" ||value=="6" ){
        document.getElementById("list").style.display = "block";
        document.getElementById("list").placeholder=document.getElementById(value).innerHTML;
    }
    else
        document.getElementById("list").style.display = "none";
}
/*function print(temp_head){
    
    while(temp_head!=null){
        //console.log(temp_head.data);
        temp_head=temp_head.next;
        
    }
}*/



function execute(){
    var option=$('input[name=selectoption]:checked').val();
    if (option==1){
        var new_head=new SinglyLinkedList().addFirst($('#list').val());
        
        $("#result").prepend("<span>"+new_head.data+"--></span>");
        //print(new_head);
        
    }
    else if (option==2){
        var new_head=new SinglyLinkedList().addLast($('#list').val());
        
        $("#result").append("<span>"+new_head.data+"--></span>");
        //print(new_head);
        
    }
    else if (option==3){
        var new_head=new SinglyLinkedList().deleteFirst($('#result span').first().innerHTML);
        $('#result span').first().remove();     
    }
    else if (option==4){
        var new_head=new SinglyLinkedList().deleteFirst($('#result span').last().innerHTML);
        $('#result span').last().remove();      
    }
    
    else{
    
    
    }
}

public class DoublyLinkedList {

  public Node head;
  public Node tail;
  public int length = 0;

  private class Node {
    private Node next;
    private Node prev;
    private String data;

    // Constructor
    public Node(Node initNext, Node initPrev, String initData){
      this.next = initNext;
      this.prev = initPrev;
      this.data = initData;
    }

    public Node(String initData){
      this.next = null;
      this.prev = null;
      this.data = initData;
    }

    // Getters
    public Node getNext() {
      return this.next;
    }
    public Node getPrev() {
      return this.prev;
    }
    public String getData() {
      return this.data;
    }

    // Setters
    public void setNext(Node setTo) {
      this.next = setTo;
    }
    public void setPrev(Node setTo) {
      this.prev = setTo;
    }
    public void setData(String setTo) {
      this.data = setTo;
    }
  } // End of Node class

  public String insertNode(String data){
    Node expo = new Node (data);
    Node currentNode = this.head;

    if(this.head == null){
      this.head = expo;
      this.length++;
    } else {
      while( currentNode.next != null ){
        currentNode = currentNode.next;
      }
      expo.prev = currentNode;
      currentNode.next = expo;
      this.length++;
    }
    this.tail = expo;
    return expo.getData();
  }

  public void removeNode(String data){
    Node currentNode = this.head;
    if(this.getHeadData() == data && this.getTailData() == data){
        this.head = null;
        this.tail = null;
    } else if(this.getHeadData() == data){
      this.head = this.head.next;
      this.head.prev = null;
    } else if(this.getTailData() == data){
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else{
      while(currentNode.next != null){
        if(currentNode.getData() == data){
          Node tempNext = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          currentNode.prev.next = tempNext;
        }
        currentNode = currentNode.next;
      }
    }
  }

  public boolean containsNode(String data){
    Node currentNode = this.head;
    while( currentNode.next != null){
      if (currentNode.getData() == data){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  public boolean isEmpty(){
    return this.head == null && this.tail == null;
  }

  public String getHeadData(){
    return this.head.getData();
  }

  public String getTailData(){
    return this.tail.getData();
  }

  public int getLength(){
    return this.length;
  }

  public void printAllNodes(){
    Node currentNode = this.head;
    while( currentNode.next != null){
      System.out.println(currentNode.getData());
      currentNode = currentNode.next;
    }

  }

}

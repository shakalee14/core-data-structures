import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class DoublyLinkedListTest {
  @Test
  public void evaluateTest() {
    DoublyLinkedList dll = new DoublyLinkedList();
    String value = dll.insertNode("Persimmon");
    dll.insertNode("Apple");
    dll.insertNode("Banana");
    String tail = dll.getTailData();
    dll.printAllNodes();
    assertEquals("Banana", tail);
    assertEquals(3, dll.getLength());
  }

  @Test
  public void evaluateTestB() {
    DoublyLinkedList dll = new DoublyLinkedList();
    dll.insertNode("Persimmon");
    dll.insertNode("Apple");
    dll.insertNode("Banana");
    assertEquals(false, dll.containsNode("Grape"));
  }

  @Test
  public void evaluateTestC() {
    DoublyLinkedList dll = new DoublyLinkedList();
    dll.insertNode("Persimmon");
    dll.insertNode("Apple");
    dll.insertNode("Banana");
    dll.removeNode("Apple");
    assertEquals(false, dll.containsNode("Apple"));
  }

  @Test
  public void evaluateTestD() {
    DoublyLinkedList dll = new DoublyLinkedList();
    dll.insertNode("Persimmon");
    dll.insertNode("Apple");
    dll.insertNode("Banana");
    dll.insertNode("Grapes");
    dll.insertNode("Tomato");
    dll.insertNode("Strawberries");
    dll.insertNode("Blueberry");
    assertEquals(7, dll.getLength());
  }

  @Test
  public void evaluateTestE() {
    DoublyLinkedList dll = new DoublyLinkedList();
    dll.insertNode("Persimmon");
    dll.insertNode("Apple");
    dll.insertNode("Banana");
    dll.insertNode("Grapes");   
    assertEquals(false, dll.isEmpty());
  }

}
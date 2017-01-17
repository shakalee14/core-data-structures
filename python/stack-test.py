import stack

def test():
  myStack = stack.Stack()
  myStack.push("Orange")
  myStack.push("Purple")
  myStack.push("Green")
  assert myStack.isEmpty() == 'true'

def testB():
  myStack = stack.Stack()
  myStack.push("Orange")
  myStack.push("Purple")
  myStack.push("Green")
  myStack.push("Blue")
  myStack.push("Pink")
  assert myStack.length() == 5

def testC():
  myStack = stack.Stack()
  myStack.push("Orange")
  myStack.push("Purple")
  myStack.push("Green")
  myStack.push("Blue")
  lastThing = myStack.pop()
  assert lastThing == "Blue"
  assert myStack.peek() == "Green"

def testD():
  myStack = stack.Stack()
  myStack.push("Orange")
  myStack.push("Purple")
  myStack.push("Green")
  myStack.push("Blue")
  firstThing = myStack.peek()
  assert firstThing == "Blue"


def testE():
  myStack = stack.Stack()
  myStack.push("Orange")
  myStack.push("Purple")
  myStack.push("Green")
  myStack.push("Blue")
  firstThing = myStack.peek()
  assert firstThing == "Blue"
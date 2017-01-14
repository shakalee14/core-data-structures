# Core Data Structures

Tests and implementations for common data structures.

Base repository for the [Core Data Structures](https://github.com/GuildCrafts/web-development-js/issues/128) goal.

## Installation and Setup

- Clone project
- Run ``` npm install ``` to install proper dependencies for the project
- Run ``` npm run btest ``` to run the babel build and initialize testing
- Run ``` npm run test:python ``` to run the python testing
- Run ``` npm run java:test ``` to run java testing

## Cool thing
- We used jsPerf to test whose ``` insert ``` function performed quicker on a Binary Search Tree:
- [Click here to run performance tests](https://jsperf.com/serafinshakabinarytest107)


## Usage and Examples

### Stack (L - I - F - O)
- (Last-In-First-Out) one-dimensional list
- Example: stacking plates


### Queue (F - I - F - O)
- (First-In-First-Out) one-dimensional list
- Example: standing in a line at the DMV

### PQueue
- Priority queue is a collection of things in which elements can be added at any time, but the only element that can be removed is the one with the highest priority
- Example: a hospital and theres one doctor, three people come in, they are all placed in the queue but the last person has a serious injury that needs immediate attention. That person will be seen first by the doctor because of the "highest priority"

### Set
- Set is a collection of unique items that can be any type
- Example: Your family (not in the tree sense)

### (Singly) Linked List
- Singly Linked list holds a sequence of nodes. Each node, in turn, contains data and a pointer, which can point to another node.
- Example: Scavanger Hunt

### Doubly Linked List
- Doubly Linked list holds a sequence of nodes. Each node, in turn, contains data and a pointer, which can point to another node which can also be BIDIRECTIONAL.
- A walkman with a previous and next button

### Hash Table
- Hash table is used to create an associative array, a structure that can map keys to values. A hash table uses a hash function to create an index into an array of buckets or slots, from which the desired value can be found.
- DICTIONARY

### Binary Search Tree
- Like a doubly linked list except instead of previous and next, people usually say left and right
- Family tree

### Directed Graphs
- Directed graph is a structure containing vertices(objects) and edges. The edges are directed inbetween nodes or nondirected.
- Your Instagram Friend network (you can follow people's pictures but it doesnt mean they are following you!)

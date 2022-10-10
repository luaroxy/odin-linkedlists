# Linked List
Singly Linked List implemented with JavaScript

## Features
- `append(value)` adds a new node containing value to the end of the list or to start if list is empty
- `prepend(value)` adds a new node containing value to the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the first node in the list
- `tail()` returns the last node in the list
- `at(index)` returns the node at the given index or error message if there is no node in the requested index
- `pop()` removes the last element from the list
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false
- `find(value)` returns the index of the node containing value, or null if not found
- `toString()` returns your LinkedList objects as strings in the format: `( value ) -> ( value ) -> ( value ) -> null`
- `insertAt(value, index)` inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
- `removeAt(index)` removes the node at the given index or error message if the list is empty or if the request index is bigger than list size
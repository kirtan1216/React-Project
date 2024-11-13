// components/CodeExamples.js
import React from "react";

const CodeExamples = () => (
  <section>
    <h2>Stack Implementation in C</h2>
    <h3>1. Define the Stack Structure</h3>
    <pre>
      <code>{`#define MAX 100
int stack[MAX];
int top = -1; // Initialize top as -1 to indicate an empty stack`}</code>
    </pre>
    
    <h3>2. Push Operation</h3>
     <p>The push operation adds an element to the top of the stack.</p>
    <h4>Algorithm:</h4>
    <p>If the stack is full, print an error message (for a fixed-size stack).</p>
    <p>If there’s space, increase the top index by 1 and place the new element at that index.</p>
    <pre>
      <code>{`void push(int value) {
    if (top >= MAX - 1) {
        printf("Stack Overflow");
    } else {
        top++;
        stack[top] = value;
        printf("%d pushed to stack", value);
    }
}`}</code>
    </pre>
   
    

    <h3>3. Pop Operation</h3>
     <p>The pop operation removes the top element from the stack.</p>
    
    <h4>Algorithm:</h4>
    <p>If the stack is empty, print an error message.</p>
    <p>Otherwise, retrieve the element at the top index, then decrement the top by 1..</p>
    <pre>
      <code>{`int pop() {
    if (top < 0) {
        printf("Stack Underflow\n");
        return -1;
    } else {
        int value = stack[top];
        top--;
        printf("%d popped from stack\n", value);
        return value;
    }
}`}</code>
    </pre>
   
    <h3>4. Peek Operation</h3>
    <p>The peek operation retrieves the value of the top element without removing it from the stack.</p>
    <h4>Algorithm:</h4>
    <p>If the stack is empty, print an error message.</p>
    <p>Otherwise, return the element at the top index.</p>
    <pre>
      <code>{`int peek() {
    if (top < 0) {
        printf("Stack is empty");
        return -1;
    } else {
        return stack[top];
    }
}`}</code>
    </pre>

    <h3>5. isEmpty Operation</h3>
    <p>The isEmpty operation checks if the stack has no elements.</p>
    <h4>Algorithm:</h4>
    <p>If top is -1, the stack is empty.</p>
    <p>Otherwise, the stack has elements.</p>
    <pre>
      <code>{`int isEmpty() {
    return top == -1;
}
`}</code>
    </pre>

    <h3>6. isFull Operation (for fixed-size stacks)</h3>
    <p>The isFull operation checks if the stack has reached its maximum capacity.</p>
    <h4>Algorithm:</h4>
    <p>If top is equal to MAX - 1, the stack is full.</p>
    <p>Otherwise, it has space for more elements.</p>
    <pre>
      <code>{`int isFull() {
    return top == MAX - 1;
}
`}</code>
    </pre>
    
  </section>
);

export default CodeExamples;

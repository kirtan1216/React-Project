import React from "react";

const Example=()=>(
    <section>
            <h2>Stack Example</h2>
            <p>Here's a simple program to demonstrate all the stack operations:</p>

            <pre>
      <code>{`#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;

void push(int value) {
    if (top >= MAX - 1) {
        printf("Stack Overflow\n");
    } else {
        stack[++top] = value;
        printf("%d pushed to stack\n", value);
    }
}

int pop() {
    if (top < 0) {
        printf("Stack Underflow\n");
        return -1;
    } else {
        return stack[top--];
    }
}

int peek() {
    if (top < 0) {
        printf("Stack is empty\n");
        return -1;
    } else {
        return stack[top];
    }
}

int isEmpty() {
    return top == -1;
}

int isFull() {
    return top == MAX - 1;
}

int main() {
    push(10);
    push(20);
    printf("Top element is %d\n", peek());
    printf("Stack full: %s\n", isFull() ? "Yes" : "No");
    printf("Stack empty: %s\n", isEmpty() ? "Yes" : "No");
    printf("%d popped from stack\n", pop());
    printf("Top element is %d\n", peek());
    return 0;
}
`}</code>
    </pre>
<p>Output:</p>
<pre>
    <code>
        {`10 pushed to stack
20 pushed to stack
Top element is 20
Stack full: No
Stack empty: No
20 popped from stack
Top element is 10`}
    </code>
</pre>



    </section>
);



export default Example;
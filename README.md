# An overview for Scopes in JS with the help of DevTools.

## Before we start let's quickly go over some basic terminology.

`var` : Use to declare function-scoped /local-scope or globally-scoped variable, optionally initialising it to a value.

`let`: The let statement declares a block-scoped local variable, optionally initialising it to a value.
Redeclaration is not possible, but reassignment is possible.

`const`: Constants are block-scoped, The value of a constant can't be changed through reassignment, and it can't be redeclared.
However, if a constant is an object or array its properties or items can be updated or removed.

**block**: when we want to treat the multiple lines of code as one aka compound statement we put it in '{}', a block is used with if..else, switch, loops But '{}' used with function is not block scoped but function-scoped.
In strict mode, starting with ES6, functions inside blocks are scoped to that block. Prior to that, block-level functions were forbidden in strict mode.

**closure**: A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).

**Scope**: The current context of execution. The context in which values and expressions are "visible" or can be referenced.

### Scope in Browser DevTools

We will be focusing on `var`, `let` and `const` and how they are scoped.

### Types of Scope in JS

![Types of Scopes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9sh7rt5xiz4xe9bvszu.png)

### Global :

A `var` variable declared outside a function, becomes **Global**.

### Script :

`let` and `const` variables declared outside a function, goes in **Script**.

When JS code Executes, in memory allocation phase `var`, `let` and `const` are given undefined values.

The catch is, we can access the `var` variable before initialising its value in the code execution part, till then it will give `undefined`.

But `let` and `const` will not behave the same and will give an error (`ReferenceError`) and are only accessible once they are defined, this is known as **Temporal Dead Zone (TDZ)**.

Despite the pros and cons both **Global** and **Script** scope are at the same level i.e., they are present in the **Global Execution Context (GEC)**.

**Script** and **Global** scope is always present via **Scope Chaining**.

![GlobalScope_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/slyo5pc2ablddcok7coq.png)
Fig : `var`, `let` and `const` declared at Global Scope.

![GlobalScope_scope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x947zfe28naxdiodfqa0.png)
Fig : **Script** and **Global** are created in scope.

---

### Functional Scope :

Any variable defined inside a function becomes **Local** to its function and is not accessible outside, `var`, `let` and `const` all become **Local** scoped.
Functions and blocks defined within the function have access to it.

![functionScope_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k4pf75gzskmo51vdbeln.png)

Fig : `var`, `let` and `const` declared in Function.

![functionScope_scope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbse0hrxdjkug0spwa8p.png)

Fig : **Local** is created in scope for `var`, `let` and `const`.

---

### Block :

`let` and `const` variables defined inside a conditional statement or loops come under **Block** scope. For `var` variables, if a block is defined outside the function
it goes to **Global** scope and if it's inside a function it goes in the **Local** scope of the function. Also, if there is any name conflict with `var` inside the block it will overwrite the outside `var` value.

![blockAtGlobal_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4izsvvmed1bh1hvs4p7d.png)
Fig : `var`, `let` and `const` declared in Block at Global Scope.

![blockAtGlobal_scope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7sjizbhllm9nlun6lo6t.png)

Fig : **Block** is created in scope for `let` and `const`. While `var a` overrides the global value.

![blockWithinFunction_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n8et749c88fqz2b30u8p.png)

Fig : `var`, `let` and `const` declared in Block in Function.

![blockWithinFunction_scope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s19m5ehr0otb89xpdtd1.png)

Fig : **Block** is created in scope for `let` and `const`. While `var` moves in the **Local** scope of Function.

---

### Closure :

It's created for functions and contains the references of values
which are not defined in the function's **Local** scope or in **Global** or **Script**, but are present in the functions in which this function is defined.
It will only form **Closure** with those values which are used in this function.

![closureAndHigherOrderFunction_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0e0b168us76qoxfmi3df.png)

Fig : Function being returned from a Function and forming a **Closure** in scope.

![closureHigherOrderFunction_HigherORderFunctionScope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mnbwsi4podzea11afvym.png)

Fig : Scope of Higher Order Fucntion.

![closureHigherOrderFunction_returnedFunctionScope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d0p3953mzt6p9em33bst.png)

Fig : Scope of Returned Fucntion, forming **Closure** with the **Local** scoped values of Higher Order Fucntion.

![closureNested_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2mlnujrywgayskhzjhsu.png)

Fig : An Example of 3 level Nested Function formin **Closure**.

![closureNested_GarpScope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tzlw0y48poro375x7yjl.png)

Fig : Scope of grandparent Function.

![closureNested_dragonScope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/npy22dh76edxtejxco88.png)

Fig : Scope of parent Function, Forming forming **Closure** with grandparent's **Local** scoped values which are used by it or by its child function.

![closureNested_lufyScope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rt1s38wubnqdmpfc456r.png)

Fig : Scope of child Function, Forming forming **Closure** with parent's as well as of grandparent's **Local** scoped values which are used by it.

![closureRefrence_code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ivnmbq3xyqqvhir0tip9.png)

Fig : Example showing **Closure** is a refrence to the value and not an Actual value.

![closureRefrence_scope](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/31ph7seiwl9q3u0g9c00.png)

Fig : **Closure** Formed with grandparent has the new value of `var a`.

# Arrays

An array is **a collection of items of the same data type** stored at contiguous memory locations. 

This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.

By default the array is uninitialized, and no elements of the array are set to any value. However, for the proper working of the array, array initialization becomes important. Array initialization can be done by the following methods:

1. Passing **no value** within the initializer: One can initialize the array by defining the size of the array and passing no values within the initializer: `int arr[ 5 ] = {  };`.
2. By passing **specific values** within the initializer: One can initialize the array by defining the size of the array and passing specific values within the initializer: `int arr[ 5 ] = { 1, 2, 3, 4, 5 };`.
3. By passing **specific values within the initializer but not declaring the size**: One can initialize the array by passing specific values within the initializer and not particularly mentioning the size, the size is interpreted by the compiler: `int arr[  ] = { 1, 2, 3, 4, 5 };`.

Usually, an array of characters is called a ‘string’, whereas an array of ints or floats is simply called an array.

## Array Operations

- insertion
- access element
- searching 

## Using Arrays

**Advantages** of using arrays: 

- arrays allow random access to elements. This makes accessing elements by position faster.
- arrays have better cache locality which makes a pretty big difference in performance.
- arrays represent multiple data items of the same type using a single name.

**Disadvantages** of using arrays: 

You can’t change the size i.e. once you have declared the array you can’t change its size because of static memory allocation. Here Insertion(s) and deletion(s) are difficult as the elements are stored in consecutive memory locations and the shifting operation is costly too.

Now if take an example of the implementation of data structure Stack using array there are some obvious flaws. 
Let’s take the POP operation of the stack. The algorithm would go something like this. 

Check for the stack underflow
Decrement the top by 1
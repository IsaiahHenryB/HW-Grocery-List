# Part 1

Write a program that takes in user input for the names of <i>three</i> grocery items and the number of each item the user would like. Then generate a shopping list output to the console with the number and name of each item in a list format.

Your program should:
1. Prompt the user to enter the first grocery item.
2. Accept the user's answer and store it in a variable.
3. Prompt the user to enter how many of the first grocery item to add.
4. Accept the user's answer and store it in a variable.
5. Repeat steps 1-4 for the second and third grocery items.
6. Output to the console the shopping list of items with each item on its own line.
7. Output to the console the total number of grocery items


## Example Output

```
Enter the first grocery item:
>> broccoli
How many broccoli would you like?
>> 4
Enter the second grocery item:
>> cereal
How many cereal would you like?
>> 2
Enter the third grocery item:
>> juice
How many juice would you like?
>> 1
Shopping List:
4 broccoli
2 cereal
1 juice
Total number of items: 7
```

# Part 2

Practice using common string methods 
- `.toLowerCase()`
- `.toUpperCase()`
- `.charAt()`
- `.indexOf()`

1. Copy and paste the following code snippet into your JavaScript file.

```
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";

```

2. Transform the string stored in `tongueTwister` to all lowercase. Store the result in a variable and print to the console.

3. Get the index of the first occurrence of "fox" in `panagram` and transform the first letter to uppercase. Print result to the console.

4. Return the 11th character in `anotherPangram`. Print result to the console. (Hint: the problem asks for the 11th character <i>not</i> the 11th index)

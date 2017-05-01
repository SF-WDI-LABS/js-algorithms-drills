A "SuperSum", also known as the proper name "digital root", is a non-negative integer calculated as follows:

* If the number only has one digit, the digital root is equal to that number.

* otherwise, the digital root is equal to the super-digit sum of all its digits, repeated until there is only one digit.

Here are some examples:

```
number: 3
digital root: 3

number: 456
4 + 5 + 6 = 15
1 + 5 = 6
digital root: 6

number: 711236
7 + 1 + 1 + 2 + 3 + 6 = 20
2 + 0 = 2
digital root: 2

number: 43
4 + 3 = 7
digital root: 7
```
Write a *recursive function* to return the digital root of a given number. 

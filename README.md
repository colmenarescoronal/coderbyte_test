# Searching challenge
This is a technical test performed on the coderbyte platform for the node js developer position.

## Challenge description
Searching Challenge

Have the function SearchingChallenge(str) take the str parameter being passed and find the longest substring that contains k unique characters, 
where k will be the first character from the string. The substring will start from the second position in the string because the first character 
will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters,
 namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. 
 If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.


### Examples

Input: "3aabacbebebe"
Output: cbebebe

Input: "2aabbcbbbadef"
Output: bbcbbb
 
## Run
You must have Node.js installed on your computer preferably recent versions 14,16,18.

1.- In the index.js file place the input string in the SearchingChallenge function's parameter 

2.- Execute the file from the console with the command node index.js

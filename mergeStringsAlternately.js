/**
 * 1768. Merge Strings Alternately
 * 
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
*/

function mergeAlternately(word1, word2) {
    let str = '';
    const longestWord = word1.length > word2.length ? word1 : word2;

    [...longestWord].forEach((_, i) => str = str + `${word1[i] ?? ''}${word2[i] ?? ''}`);
    return console.log(str);
}

mergeAlternately('abc', 'pqr')
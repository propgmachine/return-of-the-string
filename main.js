/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(str) {
  return str + '!';
}

//function yell2(str)  {
//  const answer = str + '!';

//  return answer;
//}


const result1 = yell('Hello')
console.log(result1); 


const result2 = yell('Hi');
result2; 

function getFirstCharacter(str) {
  return str[0]
}

function getLastCharacter(str) {
  return str[str.length - 1];
}

function getOneCharacter(str, i) {
  return str[1];
}

function getTwoCharacters(str, i1, i2) {
  return str[i1] + str[i2];
}

function makeCapitalized(str) {
  return str.toUpperCase();
}

function yellLouder(str) {
  return str.toUpperCase() + '!!!';
}


function getInitials(str) {
  const initials1 = str[0];
  const spaceIndex = str.indexOf(' ');
  const initials2 = str[spaceIndex + 1];

  return initials1 + '.' + initials2 + '.';

}


/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};

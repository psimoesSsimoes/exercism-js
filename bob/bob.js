/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isUpperCase = (str) =>{
    return str === str.toUpperCase();
}

const isLetter = (str) =>{
  return str.match(/[a-z]/i);
}

const isQuestion = (str) =>{
  return str[str.length-1] == '?';
}

const onlyNumbers = (str) =>{
	return str
		.replace(/,/g, '')
		.match(/[0-9]/i);
}

export const hey = (message) => {
	var trimmed = message.trim()
	if (isLetter(trimmed)){
		if (isUpperCase(trimmed) && isQuestion(trimmed)){
			return 'Calm down, I know what I\'m doing!';
		}
		if (isUpperCase(trimmed)){
			return 'Whoa, chill out!';
		}
		if (isQuestion(trimmed)){
			return 'Sure.';
		}
		return 'Whatever.';
	}
	if (isQuestion(trimmed)){
		return 'Sure.';
	}
	if (onlyNumbers(trimmed)){
			return 'Whatever.';
		}
	return 'Fine. Be that way!';
};

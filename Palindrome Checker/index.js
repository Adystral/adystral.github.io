function palindromeChecker() {
  // get the input string
  let userInput = document.getElementById("userInput").value;

  // normalize it i.e. covert the string to lowercase
  let normalizedString = userInput.toLowerCase();

  // reverse the string for comparison
  let reversedString = normalizedString.split('').reverse().join('');

  // create an if statement to check whether the normalizedString and reversedString is equal.

  if (normalizedString === reversedString) {
    document.getElementById("result").innerText = `${userInput} is a palindrome.`
  } else {
    document.getElementById("result").innerText = `${userInput} is NOT a palindrome.`
  }
}


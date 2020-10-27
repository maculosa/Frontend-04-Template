function match(str, foundStr) {
  let foundChars = new Array(foundStr.length);
  foundChars.fill(false, 0, 6);

  for (let c of str) {
    if (c == "a") {
      foundChars[0] = true;
    } else if (foundChars[0] && c == "b") {
      foundChars[1] = true;
    } else if (foundChars[1] && c == "c") {
      foundChars[2] = true;
    } else if (foundChars[2] && c == "d") {
      foundChars[3] = true;
    } else if (foundChars[3] && c == "e") {
      foundChars[4] = true;
    } else if (foundChars[4] && c == "f") {
      return true;
    } else {
        foundChars.fill(false, 0, 6);
    }
  }

  return false;
}

console.log(match("I am groot, abcdef", "abcdef"));

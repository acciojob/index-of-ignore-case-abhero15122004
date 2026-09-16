function indexOfIgnoreCase(s1, s2) {
  if (s1 === null || s1 === undefined || s2 === null || s2 === undefined) {
    return -1;
  }
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
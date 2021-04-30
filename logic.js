const isValidName = input => {
    console.log("from checkinput", /[a-z]/gi.test(input));
    return /[a-z]/gi.test(input);
}


if (typeof module !== 'undefined') {
    module.exports = { isValidName };
  }
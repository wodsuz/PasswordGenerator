export function generatePassword(pwLength: number, checked?: boolean[]) {
  var length = pwLength,
    lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz",
    upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberCharset = "0123456789",
    specialCharset = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/\"",
    space = " ",
    password = "";

  for (var i = 0, n = lowerCaseCharset.length; i < length; ++i) {
    // password += lowerCaseCharset.charAt(Math.floor(Math.random() * n));
    password += lowerCaseCharset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

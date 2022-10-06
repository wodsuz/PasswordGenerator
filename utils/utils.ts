export function generatePassword(checked?: boolean[]) {
  var length = 8,
    lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz",
    upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numberCharset = "0123456789",
    specialCharset = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/\"",
    space = " ",
    password = "";

  for (var i = 0, n = lowerCaseCharset.length; i < length; ++i) {
    password += lowerCaseCharset.charAt(Math.floor(Math.random() * n));
    password += specialCharset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

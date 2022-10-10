const lowerCaseCharset = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharset = "0123456789";
const specialCharset = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/\"";
const space = " ";

const preferancesArray = [
  lowerCaseCharset,
  numberCharset,
  upperCaseCharset,
  specialCharset,
  space,
];

export function generatePassword(pwLength: number, checked?: boolean[]) {
  let password = "";

  if (checked) {
    const filterArray = checked.flatMap((bool, index) => (bool ? index : []));

    for (let i = 0; i < pwLength; ++i) {
      const randomPreferance =
        filterArray[Math.floor(Math.random() * filterArray.length)];
      let selectedPreferance = preferancesArray[randomPreferance];
      if (i === 0 && randomPreferance === 4)
        selectedPreferance = preferancesArray[0];
      if (i === pwLength - 1 && randomPreferance === 4)
        selectedPreferance = preferancesArray[0];

      password += selectedPreferance.charAt(
        Math.floor(Math.random() * preferancesArray[randomPreferance].length)
      );
    }
  } else {
    password = "pass";
  }

  return password;
}

// Функция для проверки длины строки
const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом
const isPalindrom = (rawString) => {
  const normalizedString = rawString.replaceAll(' ', '').toLowerCase();
  let resultString = '';
  const lastIndex = normalizedString.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    resultString += normalizedString[i];
  }
  return resultString === normalizedString;
};

isPalindrom('топот'); // true
isPalindrom('довод'); // true
isPalindrom('Кекс'); // false
isPalindrom('Лёша на полке клопа нашёл '); // true

// Дополнительное задание
const extractNumbers = (arg) => {
  const string = arg.toString();
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};
extractNumbers('2023 год'); // 2023
extractNumbers('ECMAScript 2022'); // 2022
extractNumbers('1 кефир, 0.5 батона'); // 105
extractNumbers('агент 007'); // 7
extractNumbers('а я томат'); // NaN
extractNumbers(2023); // 2023
extractNumbers(-1); // 1
extractNumbers(1.5); // 15


// Проверка на палиндромом #1.0


function isPalindrom(phrase) {
  const phraseLow = phrase.toLowerCase(); // перевести все в нижний регистр
  const phrLowNoSpace = phraseLow.replaceAll(' ', ''); // убрать пробелы
  let reversePhrase = '';
  for (let i = phrLowNoSpace.length - 1; i >= 0; i--) {
    reversePhrase += phrLowNoSpace.at(i); // получим перевернутое слово или фразу без пробелов
    if (reversePhrase === phrLowNoSpace) {
      return true;
    }
  } return false;
}

isPalindrom('довод');


// Извлечение цифры #1.0


function extractDigit(string) {
  const intoString = String(string); // преобразовать в строку
  let str = ''; // объявить переменную
  for (let i = 0; i < intoString.length; i++) { // проверить циклом всю строку
    if (Number(intoString[i]) || intoString[i] === '0') { // проверить на число и ноль
      str += intoString[i]; // суммировать полученные символы в строке
    }
  }
  return Number(str); // вернуть Number, чтобы отсечь первый ноль
}
extractDigit (2023);


// Добавочный символ

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('1', 4, '0');


// Кексобукинг рандом

function math(min, max, num) {
  const random = Math.random() * (max - min + 1) + min; // находим число в диапазоне
  return random.toFixed(num); // выводим нужное число знаком после запятой
}
math(1, 4, 6);

// Проверка на палиндромом

console.log(palindrom('Лёша на полке клопаф нашёл'));

function palindrom(phrase) {
  let phraseLow = phrase.toLowerCase(); // перевести все в нижний регистр
  let phrLowNoSpace = phraseLow.replaceAll(' ', ''); // убрать пробелы
  let lastIndex = phrLowNoSpace.length - 1; // получить последний индекс строки
  for (let i = 0; i < phrLowNoSpace.length / 2; i++) { // проверить циклом
      if(phrLowNoSpace[i] !== phrLowNoSpace[lastIndex - i]) { // проверить равен зеркальный индекс
      return false; // если не равен вернуть false
    }
    return true; // если совпадает вернуть true
  }
}





// Извлечение цифры

console.log(extractDigit('1.5i04'));

function extractDigit(string) {
  let intoString = String(string); // преобразовать в строку
  let str = ''; // объявить переменную
  for (let i = 0; i < intoString.length; i++) { // проверить циклом всю строку
    if (Number(intoString[i]) || intoString[i] == "0") { // проверить на число и ноль
      str += intoString[i]; // суммировать полученные символы в строке
    }
  }
  return Number(str); // вернуть Number, чтобы отсечь первый ноль
}




// Добавочный символ

console.log(symb('1', 5, 'q'));

function symb(start, length, last) {
}






// Кексобукинг рандом

console.log(math(1, 4, 6))

function math(min, max, num) {
  const random = Math.random() * (max - min) + min // находим число в диапазоне
  return random.toFixed(num) // выводим нужное число знаком после запятой
}



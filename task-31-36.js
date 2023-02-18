// task-31
// Доступу до значення елемента рядка рядок[індекс]
const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// task-32
// Метод рядків slice(startIndex, endIndex)
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line
  return substring;
}

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// task-33
// ЗАДАЧА: ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ
function formatMessage(message, maxLength) {
  let result;
  if (message.length > maxLength) {
    result = message.slice(message, maxLength) + "...";
  } else {
    result = message;
  }
  return result;
}

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// task-34
// Методи рядка toLowerCase() і toUpperCase()
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T a SpaM"));
// console.log(normalizeInput("Big SALES"));

// task-35
// Метод рядків includes(substring)
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));

// task-36
// ЗАДАЧА: ПЕРЕВІРКА СПАМУ
function checkForSpam(message) {
  let result;
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  return result;
}

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));

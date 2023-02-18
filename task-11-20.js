// task-11
// Математичні оператори
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;
}

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// task-12
// ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  return message;
}
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// task-13
//Порівняння повертають буль - true або false
function isAdult(age) {
  const passed = age >= 18;

  return passed;
}
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));

// task-14
// Оператори === (строга рівність) і !== (строга нерівність)
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// task-15
// if приводиться до буля true або false
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }
  return message;
}

// console.log(checkAge(17));
// console.log(checkAge(28));

// task-16
// ЗАДАЧА: СКЛАД ТОВАРІВ
function checkStorage(available, ordered) {
  let message;
  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }
  return message;
}
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// task-17
// Комбіновані оператори - це коротший спосіб присвоїти змінній нове значення
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// task-18
// ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }
  return message;
}

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));

// task-19
// Конструкція if...else
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === "jqueryismyjam") {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
  return message;
}
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// task-20
// ЗАДАЧА: СКЛАД ТОВАРІВ 2.0
function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));

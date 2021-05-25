import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.number);

  creditCard.expirationDate = valid.expirationDate(values.expiration);
  creditCard.cardholderName = valid.cardholderName(values.name);
  creditCard.cvv = valid.cvv(values.cvc);

  console.log(creditCard);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvc = false;

  //Card CVV expiration
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  //Card Expiration Verification
  if (values.expiration === null || !values.expiration.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration date is invalid";
  }

  //Card Number Verification
  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit card number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card number is invalid";
  }

  //Cardholder Name Verification
  if (values.name === null || !values.name.trim()) {
    errors.message = "Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is invalid";
  }

  if (
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Credit Card is valid";
  }

  return errors;
}

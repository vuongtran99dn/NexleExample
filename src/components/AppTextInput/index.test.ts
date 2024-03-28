import { checkPasswordStrength } from './functions';

test('password must 6 character', () => {
  expect(checkPasswordStrength('12345').strengthLevel).toEqual('');
});

test('password 6 character enough', () => {
  expect(checkPasswordStrength('123456').strengthLevel).not.toEqual('');
});

test('default number', () => {
  expect(checkPasswordStrength('1233456').strengthLevel).toEqual('Wear');
});

test('default lowercase letters', () => {
  expect(checkPasswordStrength('asdfgh').strengthLevel).toEqual('Wear');
});

test('Contains both lowercase and uppercase letters', () => {
  expect(checkPasswordStrength('asdFGH').strengthLevel).toEqual('Fair');
});

test('Contains at least one numeric character and lowercase', () => {
  expect(checkPasswordStrength('1asdfgh').strengthLevel).toEqual('Fair');
});

test('Contains at least one numeric character and uppercase', () => {
  expect(checkPasswordStrength('1ASDFGH').strengthLevel).toEqual('Fair');
});

test('Contains special characters and lowercase', () => {
  expect(checkPasswordStrength('!@#asdfgh').strengthLevel).toEqual('Fair');
});

test('Contains special characters and uppercase', () => {
  expect(checkPasswordStrength('!@#ASDFGH').strengthLevel).toEqual('Fair');
});

test('Contains lowercase,uppercase and number', () => {
  expect(checkPasswordStrength('123asdFGH').strengthLevel).toEqual('Good');
});

test('Contains lowercase,uppercase and special characters', () => {
  expect(checkPasswordStrength('!@#asdFGH').strengthLevel).toEqual('Good');
});

test('Contains lowercase,uppercase, number and special characters', () => {
  expect(checkPasswordStrength('!@#asdFGH123').strengthLevel).toEqual('Strong');
});

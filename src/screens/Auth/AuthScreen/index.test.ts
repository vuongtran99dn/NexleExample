import { regexEmail } from './constant';

it('matches email', () => {
  expect('vuongtran99dn@gmail.com').toMatch(regexEmail);
});

it('email not dot', () => {
  expect('vuongtran99dn@gmailcom').not.toMatch(regexEmail);
});

it('email not @', () => {
  expect('vuongtran99dngmail.com').not.toMatch(regexEmail);
});

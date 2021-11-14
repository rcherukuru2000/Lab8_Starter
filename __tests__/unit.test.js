// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Phone Numbers
test('Checking false first phone num', () => {
    expect(functions.isPhoneNumber('8584140773')).toBe(false);
});

test('Checking false second phone num', () => {
    expect(functions.isPhoneNumber('My name is Jeff')).toBe(false);
});

test('Checking true first phone num', () => {
    expect(functions.isPhoneNumber('858-414-1773')).toBe(true);
});


test('Checking true first phone num', () => {
    expect(functions.isPhoneNumber('(858)-414-1773')).toBe(true);
});

//Email

test('Checking false first email', () => {
    expect(functions.isEmail('123')).toBe(false);
});

test('Checking false second email', () => {
    expect(functions.isEmail('jeff@jeff')).toBe(false);
});

test('Checking true first email', () => {
    expect(functions.isEmail('rag@ucsd.edu')).toBe(true);
});

test('Checking true second email', () => {
    expect(functions.isEmail('jeff@jeff.com')).toBe(true);
});

//Passwords

test('Checking false first password', () => {
    expect(functions.isStrongPassword('asdasdasdasdasfasfasfasfasfasf')).toBe(false);
});

test('Checking false second password', () => {
    expect(functions.isStrongPassword('1False')).toBe(false);
});

test('Checking true first password', () => {
    expect(functions.isStrongPassword('valid')).toBe(true);
});

test('Checking true second password', () => {
    expect(functions.isStrongPassword('valid_2000')).toBe(true);
});

//Dates

test('Checking false first date', () => {
    expect(functions.isDate('jeff')).toBe(false);
});

test('Checking false second date', () => {
    expect(functions.isDate('123/123123/123123')).toBe(false);
});

test('Checking true first date', () => {
    expect(functions.isDate('01/12/2020')).toBe(true);
});

test('Checking true second date', () => {
    expect(functions.isDate('1/2/2222')).toBe(true);
});

//Colors

test('Checking false first color', () => {
    expect(functions.isHexColor('F2231')).toBe(false);
});

test('Checking false second color', () => {
    expect(functions.isHexColor('0X12522c')).toBe(false);
});

test('Checking true first color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Checking true second color', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});




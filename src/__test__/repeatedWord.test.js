'use strict';

const RepeatedWord = require('../repeatedWord');

describe('repeatedWord.js', () => {
  test('Successfully returned a duplicate word', () => {
    expect(RepeatedWord('It is a dog eat dog world')).toEqual('dog');
  });
  test('Returns undefined when given an empty string', () => {
    expect(RepeatedWord('')).toEqual(undefined);
  });
  test('Returns undefined when given something other than a string', () => {
    expect(RepeatedWord(76547)).toEqual(undefined);
  });
  test('Returns undefined if there are no duplicate words', () => {
    expect(RepeatedWord('Gregor is less cute that Luna')).toEqual(undefined);
  });
});

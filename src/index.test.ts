import each from 'jest-each';
import deepCopyObj from './index';

describe('deepCopyObj', () => {
  describe('equality tests', () => {
    each`
      obj
      ${undefined}
      ${{}}
    `.test('deepCopyObj() called with $obj should return $obj', ({ obj }) => {
      const result = deepCopyObj(obj);
      expect(result).toEqual(obj);
    });
  });

  describe('reference tests', () => {
    test('result of {} should not be the same object', () => {
      const obj = {};
      const result = deepCopyObj(obj);
      expect(result).not.toBe(obj);
    });
  });
});

import each from 'jest-each';
import deepCopyObj from './index';

describe('deepCopyObj', () => {
  describe('equality tests', () => {
    each`
      obj
      ${undefined}
      ${{}}
      ${{ a: 5, b: 7 }}
      ${{ a: 5, b: undefined, c: null }}
      ${{ a: 5, b: 7, c: {} }}
      ${{ a: 5, b: null, c: undefined, d: { a: 5, b: null, c: undefined } }}
      ${{
        a: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
        b: null,
        c: undefined,
        d: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
      }}
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

    test('result of nested object (one level) should not have the same objects in references', () => {
      const nestedObj = {
        nestedA: 1,
        nestedB: 2,
      };
      const obj = {
        a: 3,
        b: 4,
        nestedObj,
      };

      const result = deepCopyObj(obj);

      expect(result).not.toBe(obj);
      expect(result.nestedObj).not.toBe(nestedObj);
    });
  });
});

interface Obj {
  [k: string]: any;
}

const deepCopyObj = (obj?: Obj) => {
  if (obj === undefined) {
    return undefined;
  }

  const result: Obj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      result[key] = deepCopyObj(value);
    } else {
      result[key] = value;
    }
  });
  return result;
};

export default deepCopyObj;

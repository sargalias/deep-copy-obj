interface Obj {
  [k: string]: any;
}

const deepCopyObj = (obj?: Obj) => {
  if (!obj) {
    return undefined;
  }

  const result: Obj = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
};

export default deepCopyObj;

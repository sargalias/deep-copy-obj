interface Obj {
  [k: string]: any;
}

const deepCopyObj = (obj?: Obj) => {
  const result = obj ? {} : undefined;
  return result;
};

export default deepCopyObj;

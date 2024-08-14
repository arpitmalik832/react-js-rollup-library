const convertToArrayOfPairs = (properties = {}) =>
  Object.entries(properties).reduce((acc, curr, idx) => {
    if (idx % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[Math.floor(idx / 2)].push(curr);
    }
    return acc;
  }, []);

const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {},
  );

export { convertToArrayOfPairs, renameKeys };

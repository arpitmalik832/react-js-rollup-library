const getQueryParam = (query, param) => {
  const urlSearchParams = new URLSearchParams(query);
  return param ? urlSearchParams?.get(param) : urlSearchParams;
};

const processQueryParams = searchString => {
  const data = searchString.substring(1);
  const array = data.split('&');
  return array.reduce((oldData, currentData) => {
    const split = currentData.split('=');
    const [key, value] = split;
    // eslint-disable-next-line no-param-reassign
    oldData[key] = value;
    return oldData;
  }, {});
};

const mapQueryString = query => {
  if (!query) {
    return {};
  }
  const queryMap = {};
  const queryParts = query.split('&');
  queryParts.forEach(part => {
    const [key, value] = part.split('=');
    queryMap[key] = value;
  });
  return queryMap;
};

export { getQueryParam, processQueryParams, mapQueryString };

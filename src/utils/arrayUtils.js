const deduplicate = arr => [
  ...new Map(arr.map(item => [item.id, item])).values(),
];

export { deduplicate };

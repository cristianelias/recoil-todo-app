let id = 0;

export const getId = function getId() {
  return id++;
};

export const replaceItemAtIndex = function replaceItemAtIndex(
  arr,
  index,
  newValue
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

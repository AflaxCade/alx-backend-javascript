export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (let value of array) {
    newarray.push(appendString + value);
  }

  return newarray;
}

export default function createInt8TypedArray(length, position, value) {
  const arrBuff = new ArrayBuffer(length);
  const typedIntArray = new Int8Array(arrBuff);
  try {
    typedIntArray[position] = value;
  } catch (e) {
    throw new Error('Position outside range');
  }
  return new Int8Array(typedIntArray);
}

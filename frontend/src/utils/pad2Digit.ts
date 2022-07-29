const pad2Digit = (num: number, pad: number = 2) => {
  return num.toString().padStart(pad, '0');
};

export default pad2Digit;

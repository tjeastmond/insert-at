const insertAt = (array, insert, at) => {
  let newArray = [...array];
  let position = at >= newArray.length ? newArray.length : at;
  newArray.splice(position, 0, insert);
  return newArray;
};

export default insertAt;

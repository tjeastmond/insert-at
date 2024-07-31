export default function insertAt(array: any[], insert: any, at: number): any[] {
  let newArray = [...array];
  let position = at;

  if (at >= newArray.length) position = newArray.length;
  if (at < 0) position = 0;

  newArray.splice(position, 0, insert);
  return newArray;
}

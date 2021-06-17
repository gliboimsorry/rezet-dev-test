export default function checkMatrix(matrix) {
  if (
    !matrix ||
    matrix.length < 3 ||
    matrix[0].length < 3 ||
    matrix[0].length !== matrix[1].length ||
    matrix[1].length !== matrix[2].length
  ) {
    return "Wrong Input!";
  }

  console.log(`Original matrix - `);
  matrix.forEach((row) => console.log(row));
  console.log(`---------`);
  let i = 0;
  let result = [];
  while (matrix[0].length > i) {
    if (i === matrix[0].length - 2) {
      break;
    }
    let sectorNums = [];
    matrix.forEach((row) => {
      console.log(row[i], row[i + 1], row[i + 2]);
      sectorNums.push(row[i], row[i + 1], row[i + 2]);
    });
    console.log(
      JSON.stringify(sectorNums.sort()) ===
        JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    );
    if (
      JSON.stringify(sectorNums.sort()) ===
      JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ) {
      result.push(true);
    } else {
      result.push(false);
    }
    console.log(`---------`);
    i++;
  }
  return result;
}

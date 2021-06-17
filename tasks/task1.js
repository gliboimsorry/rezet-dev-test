export default function checkArr(arr) {
  if (!arr || arr.length < 3) {
    return "Wrong Input!";
  }

  const result = [];
  let i = 0;
  console.log(`Original array - ${arr}`);
  arr.forEach((el) => {
    if (i === arr.length - 2) {
      return [];
    }
    if (
      (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) ||
      (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2])
    ) {
      result.push(1);
      logToConsole(arr[i], arr[i + 1], arr[i + 2]);
      i++;
    } else {
      result.push(0);
      logToConsole(arr[i], arr[i + 1], arr[i + 2]);
      i++;
    }
  });
  return result;
}

function logToConsole(num1, num2, num3) {
  console.log(
    `${num1}, ${num2}, ${num3} => ${num1} > ${num2} < ${num3} - ${
      num1 > num2 && num2 < num3
    } , ${num1} < ${num2} > ${num3} - ${num1 < num2 && num2 > num3}`
  );
}

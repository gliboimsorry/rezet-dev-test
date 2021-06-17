export default function formatText(text, format, limit) {
  if (!text || !format || !limit || text.length !== format.length) {
    return "Wrong input!";
  }

  let result = [];
  let divider = "";
  let i = 0;
  text.forEach((row) => {
    let rowStr = "";
    let rowStrs = [];
    row.forEach((word) => {
      rowStr += ` ${word}`;
    });
    rowStr = rowStr.trim();
    console.log(rowStr);
    console.log(rowStr.length);
    if (rowStr.length > limit) {
      for (let j = 0; j <= rowStr.length / limit; j++) {
        for (let i = limit; i >= 0; i--) {
          if (rowStr[i] === " ") {
            rowStrs.push(rowStr.substring(0, i).trim());
            rowStr = rowStr.replace(rowStr.substring(0, i).trim(), "");
            break;
          }
        }
      }
    }
    if (rowStr.length <= limit) {
      rowStrs.push(rowStr);
    }
    pushResult(rowStrs, i, format, limit).forEach((rowStr) => {
      result.push(rowStr);
    });
    i++;
  });
  for (let i = 0; i < result[0].length; i++) {
    divider += "*";
  }
  result.unshift(divider);
  result.push(divider);
  return result;
}

function pushResult(arr, i, format, limit) {
  let rowStrs = [];
  arr.forEach((rowStr) => {
    let extraSpaceLength = limit - rowStr.length;
    let extraSpace = "";
    for (let j = 0; j < extraSpaceLength; j++) {
      extraSpace += " ";
    }
    if (format[i] === "LEFT") {
      rowStr += extraSpace;
    } else if (format[i] === "RIGHT") {
      rowStr = extraSpace + rowStr;
    }
    rowStrs.push(`*${rowStr}*`);
  });

  return rowStrs;
}

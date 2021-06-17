import checkArr from "/tasks/task1.js";
import checkMatrix from "/tasks/task2.js";
import formatText from "/tasks/task3.js";

const task1Button = document.getElementById("task1");
const task2Button = document.getElementById("task2");
const task3Button = document.getElementById("task3");

task1Button.addEventListener("click", () => {
  console.log(checkArr([1, 3, 5, 4, 5, 7]));
});

task2Button.addEventListener("click", () => {
  console.log(
    checkMatrix([
      [1, 2, 3, 2, 7],
      [4, 5, 6, 8, 1],
      [7, 8, 9, 4, 5],
    ])
  );
});

task3Button.addEventListener("click", () => {
  console.log(
    formatText(
      [
        ["Hello", "world"],
        ["Brad", "came", "to", "dinner", "with", "us"],
        ["He", "loves", "tacos"],
      ],
      ["LEFT", "RIGHT", "LEFT"],
      16
    )
  );
});

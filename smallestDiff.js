const list1 = [10, 14, 16, 18, 20];
const list2 = [23, 30, 33, 54, 96];

const minDiff = smallestDiff(list1, list2);

function smallestDiff(list1, list2) {
    let minDiff = Number.MAX_VALUE;
    for (let i = 0; i < list1.length; i++) {
      for (let j = 0; j < list2.length; j++) {
        const diff = Math.abs(list1[i] - list2[j]);
        if (diff < minDiff) {
          minDiff = diff;
        }
      }
    }
    return minDiff;
  }


/*
  function smallestDiff(list1, list2) {
    let minDiff = Number.MAX_VALUE;
    for (const num1 of list1) {
      for (const num2 of list2) {
        const diff = Math.abs(num1 - num2);
        if (diff < minDiff) {
          minDiff = diff;
        }
      }
    }
    return minDiff;
  }
    */
  
  console.log(minDiff)
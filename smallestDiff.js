const list1 = [10, 14, 16, 18, 20];
const list2 = [23, 30, 33, 54, 96];
  
  const minDiff = smallestDiff(list1, list2);

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
    
  
  console.log(minDiff)
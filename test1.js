function analyzeNumbers(arr) {
    let sum = 0;
    let evenCount = 0;
    let oddCount = 0;
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    let average = (sum / arr.length).toFixed(2);

    return {
        sum: sum,
        evenCount: evenCount,
        oddCount: oddCount,
        max: max,
        min: min,
        average: average
    };
}
console.log(analyzeNumbers([1, 2, 3, 4, 5]));

const array = [3, 2, 1]

function countSwaps(a) {
    let swap = 0;
    
    for (let i = 0; i < a.length; i++) {
        // console.log('ICI', i,  a[i]);
        for (let j = 0; j < a.length - 1; j++) {
            // console.log('HERE', j,a[j]);
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swap++;
            }
        }
    }
    console.log(`Array is sorted in ${swap} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

console.log(countSwaps(array));
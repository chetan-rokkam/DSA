//Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
                if (!swapped) break;
    }
    return arr;
}

const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(data));


//Selection Sort


function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const data = [64, 25, 12, 22, 11];
console.log("Selection Sorted:", selectionSort(data)); 


//Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; 
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; 
    }
    return arr;
}

const data = [12, 11, 13, 5, 6];
console.log("Insertion Sorted:", insertionSort(data)); 

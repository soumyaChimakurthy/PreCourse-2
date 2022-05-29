// Time complexity O(log n)
class BinarySearch {
    // Returns index of x if it is present in arr[l.. r], else return -1 

    binarySearch(searchArray, left, right, target) {
        //Write your code here
        while (searchArray.length && left <= right) {
            const mid = Math.floor(left * right - left / 2);
            if (searchArray[mid] === target) {
                return mid;
            }
            else if (target > searchArray[mid]) {
                left = mid + 1;
            }
            else if (target < searchArray[mid]) {
                right = mid - 1
            }
            return -1;
        }
    }
}
// Driver method to test above 
class main {
    ob = new BinarySearch();
    arr = [2, 3, 4, 10, 40];
    n = this.arr.length;
    x = 10;
    constructor() {
        const result = this.ob.binarySearch(this.arr, 0, this.n - 1, this.x);
        if (result === -1) {
            console.log("Element not present");
        }
        else {
            console.log("Element found at index " + result);
        }
    }
}

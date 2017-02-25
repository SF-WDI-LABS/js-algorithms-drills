function findDupsInArray(arr) {
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

var arr1 = [7,7,8,1,14,2,2,-5,6,0];
var arr2 = [-9,8,7,3,4,4,-1,-1,7];
console.log(removeDupsInArray(arr1));
console.log(removeDupsInArray(arr2));

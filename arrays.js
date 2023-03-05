
// returns array
// returns an array with all the common values of both arrays
export function arraysIntersection(arr1, arr2) {
    return arr1.reduce((acc, val) => {
        return arr2.some(el => el == val) ? [...acc, val] : acc;
    }, []);
}   

// returns array
// returns only unique values of both arrays
export function arraysReunion(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, val) => {
        return acc.some(el => el==val) ? acc : acc = [...acc, val]
    }, []);
}

// returns array
// returns all the values that are not common for both arrays
export function arraysExclusion(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, val) => {
        return arr1.some(el => el==val) && arr2.some(el => el == val) ? acc : [...acc, val];
    }, []);

}

// returns array
// returns only the unique values of the first array
export function arraysDiff(first, second) {
    return first.reduce((acc, val) => {
        return second.some(el => el==val) ? acc: [...acc, val]; 
    }, [])
};

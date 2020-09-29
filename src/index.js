
module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    return matrix.map( (arr, index) => {
        const isOdd = !(index % 2);
        return isOdd ?
            arr.sort( (a, b) => a - b ) :
            arr.sort( (a, b) => b - a );
    }).flat();
};


var A = [9, 3, 9, 3, 9, 7, 9];

console.log(solution(A));


function solution (A){

    let unpairedValue = 0;

    for(i = 0; i < A.length; i++){

        unpairedValue ^= A[i];

    }

    return unpairedValue;
}

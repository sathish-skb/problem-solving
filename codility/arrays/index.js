function solution(X, Y, D) {
    let totalDistance = 0
    let jumps = 1;
    while (totalDistance < Y) {
        totalDistance += X + D
        jumps = jumps + 1
    }
    return jumps
}

console.log(solution(10, 85, 30))

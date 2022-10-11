
function sum(numbers) {
    let sum = 0;
    //for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    //numbers.forEach((n) => { sum += n });

    return numbers.reduce((prev, curr) => prev + curr, 0);
    // reduce((인자) => 할 행동, 초기값) 
    // reduce : 배열에 있는 두 아이템간의 연산을 정의하면 반복하여 하나의 값으로 바꾸어줌

}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function toDec(numbers) {
    return numbers.reduce((prev, curr) => prev * 10 + curr, 0);
}

module.exports = {
    sum,
    avg,
    max,
    toDec,
}

const calculator = {
    add: function(a, b){
        console.log("a 더하기 b 는 " + a + b);
    },
    minus: function(a, b){
        console.log("a 빼기 b 는 " + a - b);
    },
    divide: function(a, b){
        console.log("a 나누기 b는 " + a / b);
    },
    multi: function(a, b){
        console.log("a 곱하기 b 는 " + a * b);
    },
    powerof: function(a, b){
        console.log("a 제곱 b 는 " + a ** b);
    }
};

calculator.add(1, 4)
calculator.minus(2, 4)
calculator.divide(8, 4)
calculator.multi(2, 2)
calculator.powerof(2, 2)
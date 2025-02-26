// FizzBuzz

let index = 0;

for (let index = 0; index <= 100; ++index) {
    if (index % 15 == 0) {
        console.log("fizzbuzz");
    } else if (index % 5 == 0) {
        console.log("buzz");
    } else if (index % 3 == 0) {
        console.log("fizz")
    } else {
        console.log(index);
    };

};


// Happy Number

function happyNumber(num) {
    function addSquareOfDigits(num) {
        let sum = 0;
        let digits = String(num).split('');
        for (digit of digits) {
            sum += Number(digit) ** 2;
        }
        return sum;
    };

    let sum = addSquareOfDigits(num);

    if (sum === 1) {
        return "happy";
    };
    if (sum !== 1 && String(sum).length == 1) {
        return "sad";
    };

    return happyNumber(sum);
}

let happyArr = [], index1 = 0;;
while (happyArr.length < 5) {
    let str = happyNumber(index1);

    if (str === "happy") {
        happyArr.push(index1);
    }
    index1++;
};

console.log(happyArr);



// Armstrong Number

function armstrong(num) {
    function addCubeOfDigits(num) {
        let sum = 0;
        let digits = String(num).split('');
        for (digit of digits) {
            sum += Number(digit) ** 3;
        }
        return sum;
    }

    let sumOfCubes = addCubeOfDigits(num);

    if (sumOfCubes === num) {
        return "arm";
    };
};

let armArr = [], index2 = 0;
while (armArr.length < 5) {
    let str = armstrong(index2);

    if (str === "arm") {
        armArr.push(index2);
    }
    index2++;
};

console.log(armArr);


// Array sort

function arraySort(arr) {
    if (!Array.isArray(arr)) {
        console.log("Not an array");
    } else {
        arr.sort((a, b) => a - b);
    }
};

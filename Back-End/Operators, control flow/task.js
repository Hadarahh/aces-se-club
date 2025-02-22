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
        console.log("happy");
        return;
    };
    if (sum !== 1 && String(sum).length == 1) {
        console.log("sad");
        return;
    };

    return happyNumber(sum);
}

happyNumber(19);



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
        console.log("Armstrong number");
    } else {
        console.log("Not an Armstrong number")
    };
}

armstrong(17);


// Array sort

function arraySort(arr) {
    if (!Array.isArray(arr)) {
        console.log("Not an array");
    } else {
        function toBigCase(array) {
            arr.forEach((element, index) => {
                if ((typeof element) === "string") {
                    arr.splice(index, 1, element.toUpperCase());
                }
            });
        };
        toBigCase(arr);

        arr.sort((a, b) => {
            let typeA = typeof a, typeB = typeof b;

            if ((typeA === typeB)) {
                if (typeA === "string") {
                    return a.localeCompare(b);
                } else if ((typeA === "number")) {
                    return a - b;
                } else {
                    return 0;
                }
            } else {
                return typeA.localeCompare(typeB);
            };
        });

        console.log(arr);
    };
};

let arr = [,
    "string",
    "Last",
    5, 7, 0, 30, 25,
    "apple",
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
        onemore: "yess"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    },
    true,
    undefined,
    false,
    null,
    function checkString(element, index) {
        return typeof element === "string";
    },
    [2, 3, 'youuu']
];

arraySort(arr);
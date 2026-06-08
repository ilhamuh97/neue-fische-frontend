let age: number = 25;
let score: number = 0;
const username: string = "Ilham";
const isAdmin: boolean = false;

console.log("age:", age);
console.log("score:", score);
console.log("username:", username);
console.log("isAdmin:", isAdmin);

console.log("Ist age größer oder gleich 18?", age >= 18);
console.log("Ist score gleich 100?", score === 100);
console.log("Ist username gleich 'Ilham'?", username === "Ilham");
console.log("Ist isAdmin gleich true?", isAdmin === true);

const student = {
    name: "Ilham",
    age: 22,
    isStudent: true,
    grades: [1.7, 2.0, 1.3]
};

console.log("Student Objekt:", student);
console.log("Name:", student.name);
console.log("Grades:", student.grades);

const students = [
    {
        name: "Ilham",
        age: 22,
        isStudent: true,
        grades: [1.7, 2.0, 1.3]
    },
    {
        name: "Ilham 2",
        age: 24,
        isStudent: true,
        grades: [2.3, 1.0, 1.7]
    }
];

console.log("Students Array:", students);

// Schritt 1
for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("Age is greater than 18.");
} else {
    console.log("Age is 18 or less.");
}

if (score !== 0) {
    console.log("Score is available.");
}

if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

if (username) {
    console.log("Username is available.");
}

if (username) {
    console.log("Username is evaluated as truthy.");
} else {
    console.log("Username is evaluated as falsy.");
}

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

if (isAdmin === false) {
    console.log("isAdmin is false.");
}

// let age = 0; // number
// let age = null // any
// let age = undefined // any
// let age1 = any // error

const counter: any = undefined;
const newCounter: number = counter + 1;
console.log(newCounter);

// Aufgabe 1: Boolesche Werte
const valueTrue: boolean = true;

if (valueTrue) {
    console.log("true is truthy");
} else {
    console.log("true is falsy");
}

const valueFalse: boolean = false;

if (valueFalse) {
    console.log("false is truthy");
} else {
    console.log("false is falsy");
}


// Aufgabe 2: Ganzzahlwerte
const numberOne: number = 1;

if (numberOne) {
    console.log("1 is truthy");
} else {
    console.log("1 is falsy");
}

const numberZero: number = 0;

if (numberZero) {
    console.log("0 is truthy");
} else {
    console.log("0 is falsy");
}

const numberMinusOne: number = -1;

if (numberMinusOne) {
    console.log("-1 is truthy");
} else {
    console.log("-1 is falsy");
}


// Aufgabe 3: Zeichenkettenwerte

const textHi: string = "hi";

if (textHi) {
    console.log('"hi" is truthy');
} else {
    console.log('"hi" is falsy');
}

const emptyText: string = "";

if (emptyText) {
    console.log('"" is truthy');
} else {
    console.log('"" is falsy');
}

const spaceText: string = " ";

if (spaceText) {
    console.log('" " is truthy');
} else {
    console.log('" " is falsy');
}

const textZero: string = "0";

if (textZero) {
    console.log('"0" is truthy');
} else {
    console.log('"0" is falsy');
}

const textFalse: string = "false";

if (textFalse) {
    console.log('"false" is truthy');
} else {
    console.log('"false" is falsy');
}


// Aufgabe 4: Array-Werte

const emptyArray: number[] = [];

if (emptyArray) {
    console.log("[] is truthy");
} else {
    console.log("[] is falsy");
}

const arrayOne: number[] = [1];

if (arrayOne) {
    console.log("[1] is truthy");
} else {
    console.log("[1] is falsy");
}

const arrayZero: number[] = [0];

if (arrayZero) {
    console.log("[0] is truthy");
} else {
    console.log("[0] is falsy");
}

const arrayFalse: boolean[] = [false];

if (arrayFalse) {
    console.log("[false] is truthy");
} else {
    console.log("[false] is falsy");
}


// Aufgabe 5: Objektwerte

const emptyObject: object = {};

if (emptyObject) {
    console.log("{} is truthy");
} else {
    console.log("{} is falsy");
}

const person: object = {
    name: "John"
};

if (person) {
    console.log('{ name: "John" } is truthy');
} else {
    console.log('{ name: "John" } is falsy');
}


// Bonus: Weihnachtsbaum

const n: number = 3;

for (let i = 1; i <= n; i++) {
    let text = "";
    for (let j: number = 1; j<=n-i; j++) {
        text += " ";
    }

    for (let j: number = 1; j<=i*2-1; j++) {
        text += "*";
    }
    console.log(text);
}

["name1", "name2"].forEach(name => {
    console.log(name)
})


const sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;
function sum2 (a: number, b: number): number {
    return a + b
}

console.log(sum(2, 3));
console.log(sum2(2, 3));

console.log([1, 2, 3, 4].map((n: number): number => n * 2));
console.log(["12345", "Test1234", "test", "t"].filter((text: string) => text.length > 5));
console.log([1, 2, 3, 4].reduce((a: number, b: number): number => a + b, 0));
console.log([1, 2, 3, 4, 15].some((a: number): boolean => a >= 10));

const list: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("Ergebnis: ", list
    .toSorted((a: number, b: number): number => b-a) // Sortiere diese Zahlen in absteigender Reihenfolge or use for copy toSorted (es2023)
    .map((a: number): number => a*a) // Quadriere diese Zahlen.
    .slice(4, list.length - 2) // Entferne die zwei niedrigsten und die vier höchsten Zahlen aus der Liste.
    .filter((a: number): number => a%4) // Entferne alle Zahlen, die durch 4 teilbar sind.
    .reduce((a: number, b: number): number => a+b, 0) // Addiere alle Zahlen.
);

console.log(list.pop())
console.log(list.slice())

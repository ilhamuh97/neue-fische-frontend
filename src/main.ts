// Types
type GermanGrade = 1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrade = "A" | "B" | "C" | "D" | "E" | "F";
type Grade = GermanGrade | AmericanGrade | undefined;

type GradeFormatted = GermanGrade | AmericanGrade | "*";

type Students = Student[];
type Subjects = Subject[];
type Grades = Grade[];

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    subjects: Subjects;
    takeExam?: (subject: string, grade: Grade) => boolean;
};

type Subject = {
    name: string,
    grades: Grades;
}


// Functions
function printStudent(student: Student): void {
    const nameText = `${student.firstName} ${student.lastName} (${student.age})`
    console.log(nameText);
    console.log("=".repeat(nameText.length));
    const formattedGrades: string = student.subjects
        .map((s: Subject): string =>formatSubject(s))
        .join("\n");

    console.log(`Noten:\n${formattedGrades}`);
    console.log("");
}

function formatSubject (subject: Subject): string {
    return `${subject.name}: ${formatGrades(subject.grades)}`;
}

function formatGrades (grades: Grades): string {
    return grades
        .map((g: Grade): GradeFormatted => g===undefined ? "*" : g)
        .join(", ");
}

function isValidGrade (grade: unknown): grade is Grade {
    const validNumbers: GermanGrade[] = [1, 2, 3, 4, 5, 6];
    const validLetters: AmericanGrade[] = ["A", "B", "C", "D", "E", "F"];

    return (
        grade === undefined ||
        validNumbers.includes(grade as GermanGrade) ||
        validLetters.includes(grade as AmericanGrade)
    );
}

function takeExam (this: Student, subject: string, grade: unknown): boolean {
    if (!isValidGrade(grade)) return false;

    const target: Subject | undefined = this.subjects.find((s: Subject): boolean => s.name === subject);
    if (!target) return false;

    target.grades.push(grade);
    return true;
}

// Data
const students: Students = [
    {
        firstName: "Budi Arie",
        lastName: "Santoso",
        age: 15,
        subjects: [
            { name: "Physics", grades: ["A", 1, undefined] },
            { name: "Mathematics", grades: [1, 2, "A"] },
        ],
        takeExam
    },
    {
        firstName: "Siti",
        lastName: "Aminah",
        age: 16,
        subjects: [
            { name: "Economics", grades: [3, "B", 4] },
            { name: "Mathematics", grades: [2, 2, undefined] },
        ],
        takeExam
    },
    {
        firstName: "Agus",
        lastName: "Pratama",
        age: 14,
        subjects: [
            { name: "Biology", grades: ["A", 2, 1] },
            { name: "Chemistry ", grades: [4, 5, "C"] },
        ],
        takeExam
    },
];

students.forEach(printStudent);
students[0].takeExam?.("Asas", 2); // Invalid return false
students[0].takeExam?.("Physics", 2); // Invalid return true
students.forEach(printStudent);

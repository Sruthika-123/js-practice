function getGrade(avg) {
    if (avg >= 90 && avg <= 100) {
        return 'A';
    } else if (avg >= 80) {
        return 'B';
    } else if (avg >= 70) {
        return 'C';
    } else if (avg >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

function createStudent(name, id, marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    var avg = total / marks.length;
    var grade = getGrade(avg);

    var student = {
        name: name,
        id: id,
        marks: marks,
        total: total,
        average: avg,
        grade: grade
    };

    return student;
}

function showReport(student) {
    console.log("Name: " + student.name);
    console.log("ID: " + student.id);
    console.log("Marks: ");
    for (var i = 0; i < student.marks.length; i++) {
        console.log("  Subject " + (i + 1) + ": " + student.marks[i]);
    }
    console.log("Total: " + student.total);
    console.log("Average: " + student.average);
    console.log("Grade: " + student.grade);
    console.log("-------------------------");
}


var studentsInput = [
    { name: "Aarav", id: "ST101", marks: [85, 90, 78, 92, 88] },
    { name: "Meera", id: "ST102", marks: [95, 98, 99, 94, 97] },
    { name: "Karan", id: "ST103", marks: [45, 52, 50, 48, 46] },
    { name: "Divya", id: "ST104", marks: [70, 75, 72, 73, 78] },
    { name: "Rahul", id: "ST105", marks: [88, 82, 84, 80, 85] }
];


var studentReports = [];
var topper = null;
var maxAvg = 0;

for (var i = 0; i < studentsInput.length; i++) {
    var data = studentsInput[i];
    var report = createStudent(data.name, data.id, data.marks);
    studentReports.push(report);

    if (report.average > maxAvg) {
        maxAvg = report.average;
        topper = report;
    }
}

console.log("📘 STUDENT REPORT CARDS");
console.log("=========================");
for (var i = 0; i < studentReports.length; i++) {
    showReport(studentReports[i]);
}


if (topper !== null) {
    console.log("🏆 CLASS TOPPER");
    console.log("Name: " + topper.name);
    console.log("ID: " + topper.id);
    console.log("Average Marks: " + topper.average);
}

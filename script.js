let studentData;


async function processStudentData() {
    try {
        // Calling fetch within a function in order to pass the returned data to .json() to be converted into a javascript object
        const jsonStudentData = await (await fetch("./data/students.json")).json();

        studentData = jsonStudentData ? jsonStudentData : [];
    } catch(error) {
        studentData = [];
        console.error('Cannot read student list, reason: ' + error.message);
    }
}




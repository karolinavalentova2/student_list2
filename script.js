let studentData;


async function processStudentData() {
    try {
        // Calling fetch within a function in order to pass the returned data to .json() to be converted into a javascript object
        const jsonStudentData = await (await fetch("./data/students.json")).json();

        studentData = jsonStudentData ? jsonStudentData : [];
        showStudentData(studentData);

    } catch(error) {
        studentData = [];
        console.error('Cannot read student list, reason: ' + error.message);
    }
}

function showStudentData(studentsArray) {
    const studentListElement = document.getElementById('studentList');
    const studentListEntryTemplate = document.getElementById('studentEntry');

    studentsArray.forEach((studentEntry) => {
        let temporaryStudentEntryTemplate = studentListEntryTemplate.content.cloneNode(true);

        temporaryStudentEntryTemplate.childNodes[1].childNodes[1].textContent = studentEntry['fullname'];
        temporaryStudentEntryTemplate.childNodes[1].childNodes[3].textContent = studentEntry['house'];

        studentListElement.appendChild(temporaryStudentEntryTemplate);
    })
}

// Delete child

function deleteChilds(parentElement) {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

// Sort by FIRST NAME



function sortByFirstName() {
    let sortedArray = studentData.sort((a,b) => {
        if (a['fullname'] < b['fullname']) return -1;
        if (a['fullname'] > b['fullname']) return 1;
        return 0;
    });

    deleteChilds(document.getElementById('studentList'));
    showStudentData(sortedArray);
}

let students = {};

function addStudent(id, dat, hoin, hot, eve, des, st) {
    students[id] = {dat, hoin, hot, eve, des, st}
}

function findStudent(id) {
    if (students[id]) {
        return students[id]
    } else {
        return null;
    }
}

function updateStudent(id, dat, hoin, hot, eve, des, st) {
    if (students[id]) {
        students[id] = {dat, hoin, hot, eve, des, st};
    } else {
        return null;
    }
}

function removeStudent(id) {
    if (students[id]) {
        delete students[id];
        return true;
    }
    return false;
}

function getAllStudents() {
    return students;
}

function dataLoad() {
    addStudent("123456", "Kenji Taniguchi", 48, "A");
    addStudent("234567", "Marcelo Silverio", 34);
    addStudent("345678", "Mario Reis", 55);
    addStudent("234569", "Suely Figueiredo", 29);
}

export { addStudent, findStudent, updateStudent, removeStudent, getAllStudents, dataLoad }
import { updateStudent } from "../students/index.js";
import { returnValues } from "../students/returnValues.js";
import { showAllStudentsResult } from "../students/showAllStudentsResult.js";
import { clearForm } from "../utils/clearForm.js";

function updateEvent() {
    $("#update").on("click", function() {
        const returnedValues = returnValues();
        updateStudent(returnedValues.id, returnedValues.dat, returnedValues.hoin, 
            returnedValues.hot, returnedValues.eve, returnedValues.des, returnedValues.st);
        showAllStudentsResult();
        clearForm();
    })
}

export { updateEvent }
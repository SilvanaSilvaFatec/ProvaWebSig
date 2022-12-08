import { addStudent } from "../students/index.js";
import { returnValues } from "../students/returnValues.js" ;
import { showAllStudentsResult } from "../students/showAllStudentsResult.js";
import { clearForm } from "../utils/clearForm.js";

function addEvent() {
    $("#add").on("click", function() {
        const returnedValues = returnValues();
        if (returnedValues.id) {
            addStudent(returnedValues.id, returnedValues.name, returnedValues.age);
        }
        showAllStudentsResult()
        clearForm();
    })
}

export { addEvent }
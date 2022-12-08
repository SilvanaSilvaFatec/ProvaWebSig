import { removeStudent } from "../students/index.js";
import { returnValues } from "../students/returnValues.js";
import { showAllStudentsResult } from "../students/showAllStudentsResult.js";
import { clearForm } from "../utils/clearForm.js";

function removeEvent() {
    $("#remove").on("click", function() {
        const returnedValues = returnValues();
        if (returnedValues.id) {
        removeStudent(returnedValues.id) 
        } else {
            return $("#result").html("erro: campo vazio");
        }
        showAllStudentsResult();
        clearForm();
       
    })
}

export { removeEvent }
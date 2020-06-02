function elementHide(element, boolean) {

    if (boolean) {
        // true - hide element
        element.style.display = "none";
    } else {
        // false - un-hide element
        element.style.display = "block";
    }
}

function formLock(form, boolean) {
    if (boolean) {
        // true - disable form
        form.setAttribute("disabled", "");
    } else {
        // false - enable form
        form.removeAttribute("disabled");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Execute after page has loaded completely

    //let priorityForm = document.getElementById("newIncidentPriorityLevel");
    //formLock(priorityForm, true);

    let priorityCheck = document.getElementById("priorityCheck");
    elementHide(priorityCheck, true);
});

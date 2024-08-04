document.addEventListener('DOMContentLoaded', () => {
    const editableInput1 = document.getElementById('input1');
    const editableInput2 = document.getElementById('input2');
    const editableInput3 = document.getElementById('input3');

    const editableText1 = document.getElementById('editable-text1');
    const editableText2 = document.getElementById('editable-text2');
    const editableText3 = document.getElementById('editable-text3');

    editableInput1.addEventListener('blur', function() {
        if(editableInput1.value !== "") {
            editableText1.textContent = editableInput1.value;
            editableInput1.style.display = "none";
            editableText1.style.display = "block";
        }
    });

    editableInput2.addEventListener('blur', function() {
        if(editableInput2.value !== "") {
            editableText2.textContent = editableInput2.value;
            editableInput2.style.display = "none";
            editableText2.style.display = "block";
        }
    });

    editableInput3.addEventListener('blur', function() {
        if(editableInput3.value !== "") {
            editableText3.textContent = editableInput3.value;
            editableInput3.style.display = "none";
            editableText3.style.display = "block";
        }
    });

    editableText1.addEventListener('click',() => {
        editableInput1.value = editableText1.textContent;
        editableText1.style.display = "none";
        editableInput1.style.display = "block";
        editableInput1.focus();
    });

    editableText2.addEventListener('click', function() {
        editableInput2.value = editableText2.textContent;
        editableText2.style.display = "none";
        editableInput2.style.display = "block";
        editableInput2.focus();
    });

    editableText3.addEventListener('click', function() {
        editableInput3.value = editableText3.textContent;
        editableInput3.style.display = "block";
        editableText3.style.display = "none";
        editableInput3.focus();
    });
});
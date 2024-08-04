document.addEventListener('DOMContentLoaded', () => {
    const editableText = document.getElementById('editable-text');
    const editableInput = document.getElementById('editable-input');

    editableInput.addEventListener('blur', function() {
        if(editableInput.value !== "") {
            editableText.textContent = editableInput.value;
            editableText.style.display = 'block';
            editableInput.style.display = 'none';
        }
    });

    editableText.addEventListener('click', function() {
        editableInput.value = editableText.textContent;
        editableText.style.display = 'none';
        editableInput.style.display = 'block';
        editableInput.focus();
    });

    editableInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            editableInput.blur();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const roleButtons = document.querySelectorAll('.role-selection button');
    const selectedRoleDisplay = document.createElement('div');
    selectedRoleDisplay.className = 'selected-role';
    document.querySelector('.form-container').appendChild(selectedRoleDisplay);

    roleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedRole = this.innerText;
            selectedRoleDisplay.innerText = `Role selected: ${selectedRole}`;
            selectedRoleDisplay.style.color = '#008080'; 
        });
    });
});

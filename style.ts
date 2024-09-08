
document.getElementById('resume form')?.addEventListener('submit', function(event){
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skills') as HTMLInputElement;


if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
     
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value; 
    const education = educationElement.value; 
    const experience = experienceElement.value;
    const skills = skillElement.value

}

     // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong><span id="edit-name" class="editable">${name} </span></p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable">${emailElement} </span></p>
    <p><strong>PhoneNumber:</strong><span id="edit-PhoneNumber*" class="editable"> ${phoneElement}}</span> </p>


    <h3>Education</h3>
    <p id="edit-education" class="editable">${educationElement}

    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experienceElement}

    <h3>skills</h3>
    <p id="edit-skills" class="editable">${skillElement}
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
        makeEditable()
    }
     else {
        console.error('once or more output elements are missing')
    }
})
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => 
        element.addEventListener('click', function() {
            const currentElement = element; // No type annotation needed in JavaScript
            const currentValue = currentElement.textContent || '';
            
            if (currentElement.tagName === 'SPAN') { // Correct property name
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                
                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                // Ensure parentNode exists
                const parent = currentElement.parentNode;
                if (parent) {
                    currentElement.style.display = 'none';
                    parent.insertBefore(input, currentElement); // Correct syntax
                    input.focus(); // Correct syntax
                }
            }
        })
    );
}


function updateQuestionNumbers() {
    const questions = document.querySelectorAll('.question-container');
    questions.forEach((question, index) => {
        const label = question.querySelector('label');
        label.textContent = `${index + 1}. Pregunta:`;
    });
}

document.getElementById('addQuestion').addEventListener('click', function() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionCount = questionsContainer.children.length + 1;

    const newQuestion = document.createElement('div');
    newQuestion.classList.add('question-container');
    newQuestion.innerHTML = `
        <label for="pregunta${questionCount}">${questionCount}. Pregunta:</label>
        <input type="text" name="pregunta" required placeholder="Escribe tu pregunta aquí">

        <label>Varias opciones:</label>
        <div class="options-container">
            <div class="option">
                <input type="text" name="opcion" required placeholder="Opción 1">
                <button type="button" class="remove-option">✖</button>
            </div>
        </div>
        
        <button type="button" class="add-button addOption">Añadir opción</button>
        <button type="button" class="add-button addOther">Añadir opción o respuesta "Otro"</button>
        <button type="button" class="remove-question">Eliminar pregunta</button>
    `;
    
    questionsContainer.appendChild(newQuestion);
    updateQuestionNumbers(); 
});

document.getElementById('questionsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-option')) {
        event.target.parentElement.remove();
    }
    
    if (event.target.classList.contains('remove-question')) {
        event.target.closest('.question-container').remove();
        updateQuestionNumbers(); 
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('addOption')) {
        const optionsContainer = event.target.previousElementSibling;
        const newOption = document.createElement('div');
        newOption.classList.add('option');
        newOption.innerHTML = `
            <input type="text" name="opcion" required placeholder="Opción">
            <button type="button" class="remove-option">✖</button>
        `;
        optionsContainer.appendChild(newOption);
    }
    
    if (event.target.classList.contains('addOther')) {
        const optionsContainer = event.target.previousElementSibling;
        const otherOption = document.createElement('div');
        otherOption.classList.add('option');
        otherOption.innerHTML = `
            <input type="text" name="opcion" required placeholder="Otro">
            <button type="button" class="remove-option">✖</button>
        `;
        optionsContainer.appendChild(otherOption);
    }
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const preguntas = Array.from(document.querySelectorAll('input[name="pregunta"]')).map(input => input.value);
    const opciones = Array.from(document.querySelectorAll('input[name="opcion"]')).map(input => input.value);

    console.log('Cuestionario añadido:', { preguntas, opciones });
    alert('Cuestionario añadido con éxito'); 
});
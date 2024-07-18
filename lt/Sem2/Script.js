document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coefficients for each subject
    const coefficients = {
        algebre: 1.5,
        analyse: 1.5,
        em: 1.5,
        ter: 1.5,
        pa: 1.5,
        BD: 1.5,
        ea: 1.5,
        élect: 1.5,
        anglais: 1.5,
        techcom: 1.5
    };

    // Get grades entered by user
    const algebre_grade = parseFloat(document.getElementById('algebre').value.replace(',', '.')) || 0;
    const analyse_grade = parseFloat(document.getElementById('analyse').value.replace(',', '.')) || 0;
    const em_grade = parseFloat(document.getElementById('em').value.replace(',', '.')) || 0;
    const ter_grade = parseFloat(document.getElementById('ter').value.replace(',', '.')) || 0;
    const pa_grade = parseFloat(document.getElementById('pa').value.replace(',', '.')) || 0;
    const élect_grade = parseFloat(document.getElementById('éléct').value.replace(',', '.')) || 0;
    const BD_grade = parseFloat(document.getElementById('BD').value.replace(',', '.')) || 0;
    const techcom_grade = parseFloat(document.getElementById('techcom').value.replace(',', '.')) || 0;
    const anglais_grade = parseFloat(document.getElementById('anglais').value.replace(',', '.')) || 0;
    const ea_grade = parseFloat(document.getElementById('ea').value.replace(',', '.')) || 0;

    // Calculate weighted sum
    const weightedSum = (
        (algebre_grade * coefficients.algebre) +
        (analyse_grade * coefficients.analyse) +
        (em_grade * coefficients.em) +
        (ter_grade * coefficients.ter) +
        (pa_grade * coefficients.pa) +
        (élect_grade * coefficients.élect) +
        (BD_grade * coefficients.BD) +
        (techcom_grade * coefficients.techcom) +
        (anglais_grade * coefficients.anglais) +
        (ea_grade * coefficients.ea) 
    );

    // Calculate moyenne pondérée
    const moyenne = weightedSum / 15; // Total sum of coefficients

    // Show modal with result
    const modal = document.getElementById('myModal');
    const modalResult = document.getElementById('modalResult');
    modalResult.textContent = moyenne.toFixed(2);
    modal.style.display = 'block';

    // Close modal when close button or outside modal is clicked
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Store semester 2 average in localStorage
    localStorage.setItem('semester2Average', moyenne.toFixed(2));
});
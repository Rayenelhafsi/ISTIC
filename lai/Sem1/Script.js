document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coefficients for each subject
    const coefficients = {
        algebre: 1.5,
        analyse: 1.5,
        algo: 1.5,
        en: 1.5,
        exploi: 1.5,
        élect: 1.5,
        mec: 1.5,
        techcom: 1.5,
        anglais: 1.5,
        circ: 1.5
    };

    // Get grades entered by user
    const algebre_grade = parseFloat(document.getElementById('algebre').value.replace(',', '.')) || 0;
    const analyse_grade = parseFloat(document.getElementById('analyse').value.replace(',', '.')) || 0;
    const algo_grade = parseFloat(document.getElementById('algo').value.replace(',', '.')) || 0;
    const en_grade = parseFloat(document.getElementById('en').value.replace(',', '.')) || 0;
    const exploi_grade = parseFloat(document.getElementById('exploi').value.replace(',', '.')) || 0;
    const élect_grade = parseFloat(document.getElementById('éléct').value.replace(',', '.')) || 0;
    const mec_grade = parseFloat(document.getElementById('mec').value.replace(',', '.')) || 0;
    const techcom_grade = parseFloat(document.getElementById('techcom').value.replace(',', '.')) || 0;
    const anglais_grade = parseFloat(document.getElementById('anglais').value.replace(',', '.')) || 0;
    const circ_grade = parseFloat(document.getElementById('circ').value.replace(',', '.')) || 0;

    // Calculate weighted sum
    const weightedSum = (
        (algebre_grade * coefficients.algebre) +
        (analyse_grade * coefficients.analyse) +
        (algo_grade * coefficients.algo) +
        (en_grade * coefficients.en) +
        (exploi_grade * coefficients.exploi) +
        (élect_grade * coefficients.élect) +
        (mec_grade * coefficients.mec) +
        (techcom_grade * coefficients.techcom) +
        (anglais_grade * coefficients.anglais) +
        (circ_grade * coefficients.circ)
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

    // Store semester 1 average in localStorage
    localStorage.setItem('semester1Average', moyenne.toFixed(2));
});
document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coefficients for each subject
    const coefficients = {
        algebre: 1,
        analyse: 1,
        algo: 1.5,
        c: 1.5,
        exploi: 2,
        élect: 1,
        Arch: 2,
        techcom: 1,
        anglais: 1,
        signal: 1,
        TD: 1,
        comp: 1
    };

    // Get grades entered by user
    const algebre_grade = parseFloat(document.getElementById('algebre').value.replace(',', '.')) || 0;
    const analyse_grade = parseFloat(document.getElementById('analyse').value.replace(',', '.')) || 0;
    const algo_grade = parseFloat(document.getElementById('algo').value.replace(',', '.')) || 0;
    const c_grade = parseFloat(document.getElementById('c').value.replace(',', '.')) || 0;
    const exploi_grade = parseFloat(document.getElementById('exploi').value.replace(',', '.')) || 0;
    const élect_grade = parseFloat(document.getElementById('éléct').value.replace(',', '.')) || 0;
    const Arch_grade = parseFloat(document.getElementById('Arch').value.replace(',', '.')) || 0;
    const techcom_grade = parseFloat(document.getElementById('techcom').value.replace(',', '.')) || 0;
    const anglais_grade = parseFloat(document.getElementById('anglais').value.replace(',', '.')) || 0;
    const signal_grade = parseFloat(document.getElementById('signal').value.replace(',', '.')) || 0;
    const TD_grade = parseFloat(document.getElementById('TD').value.replace(',', '.')) || 0;
    const comp_grade = parseFloat(document.getElementById('comp').value.replace(',', '.')) || 0;

    // Calculate weighted sum
    const weightedSum = (
        (algebre_grade * coefficients.algebre) +
        (analyse_grade * coefficients.analyse) +
        (algo_grade * coefficients.algo) +
        (c_grade * coefficients.c) +
        (exploi_grade * coefficients.exploi) +
        (élect_grade * coefficients.élect) +
        (Arch_grade * coefficients.Arch) +
        (techcom_grade * coefficients.techcom) +
        (anglais_grade * coefficients.anglais) +
        (signal_grade * coefficients.signal) +
        (TD_grade * coefficients.TD) +
        (comp_grade * coefficients.comp)
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
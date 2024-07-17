document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coefficients for each subject
    const coefficients = {
        algebre: 1.5,
        analyse: 1.5,
        algo: 1.5,
        c: 1,
        python: 1,
        reseau: 2,
        exploi: 1.5,
        bd: 2,
        techcom: 1,
        anglais: 1,
        cp: 1 // Remove the semicolon here
    };
    
    // Get grades entered by user
    const algebre_grade = parseFloat(document.getElementById('algebre_grade').value) || 0;
    const analyse_grade = parseFloat(document.getElementById('analyse_grade').value) || 0;
    const algo_grade = parseFloat(document.getElementById('algo_grade').value) || 0;
    const c_grade = parseFloat(document.getElementById('c_grade').value) || 0;
    const python_grade = parseFloat(document.getElementById('python_grade').value) || 0;
    const reseau_grade = parseFloat(document.getElementById('reseau_grade').value) || 0;
    const exploi_grade = parseFloat(document.getElementById('exploi_grade').value) || 0;
    const bd_grade = parseFloat(document.getElementById('bd_grade').value) || 0;
    const techcom_grade = parseFloat(document.getElementById('techcom_grade').value) || 0;
    const anglais_grade = parseFloat(document.getElementById('anglais_grade').value) || 0;
    const cp_grade = parseFloat(document.getElementById('cp_grade').value) || 0;
    
    // Calculate weighted sum
    const weightedSum = (
        (algebre_grade * coefficients.algebre) +
        (analyse_grade * coefficients.analyse) +
        (algo_grade * coefficients.algo) +
        (c_grade * coefficients.c) +
        (python_grade * coefficients.python) +
        (reseau_grade * coefficients.reseau) +
        (exploi_grade * coefficients.exploi) +
        (bd_grade * coefficients.bd) +
        (techcom_grade * coefficients.techcom) +
        (anglais_grade * coefficients.anglais) +
        (cp_grade * coefficients.cp)
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
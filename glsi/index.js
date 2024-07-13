const disciplines = {
    "Glsi": 6,
    "Lisi": 6,
    "Lai": 6,
    "Lt": 6
};

const disciplineButtons = document.querySelectorAll("#page1 .discipline-btn");
const semesterButtonsContainer = document.getElementById("semester-buttons");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const programButton = document.getElementById("program-btn");
const calculateButton = document.getElementById("calculate-btn");

let currentDiscipline = "";

disciplineButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        currentDiscipline = e.target.getAttribute("data-discipline");
        generateSemesterButtons(disciplines[currentDiscipline]);
        slideTransition(page1, page2);
    });
});

semesterButtonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() == 'button') {
        slideTransition(page2, page3);
    }
});

function generateSemesterButtons(numSemesters) {
    semesterButtonsContainer.innerHTML = "";
    for (let i = 1; i <= numSemesters; i++) {
        const semesterBtn = document.createElement("button");
        semesterBtn.textContent = "Semester " + i;
        semesterButtonsContainer.appendChild(semesterBtn);
    }
}

function slideTransition(hidePage, showPage) {
    hidePage.classList.add("hidden");
    setTimeout(() => {
        hidePage.style.display = "none";
        showPage.style.display = "flex";
        setTimeout(() => {
            showPage.classList.remove("hidden");
        }, 50);
    }, 500);
}

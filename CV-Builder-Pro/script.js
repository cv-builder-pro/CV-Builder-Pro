/*=====================================
        CV BUILDER PRO
        SCRIPT.JS - PART 1
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ===== FORM INPUTS =====

    const fullName = document.getElementById("fullName");
    const jobTitle = document.getElementById("jobTitle");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const website = document.getElementById("website");
    const summary = document.getElementById("summary");

    // ===== PREVIEW =====

    const previewName = document.getElementById("previewName");
    const previewJobTitle = document.getElementById("previewJobTitle");
    const previewEmail = document.getElementById("previewEmail");
    const previewPhone = document.getElementById("previewPhone");
    const previewAddress = document.getElementById("previewAddress");
    const previewWebsite = document.getElementById("previewWebsite");
    const previewSummary = document.getElementById("previewSummary");


    function updatePreview() {

        if (previewName)
            previewName.textContent =
                fullName.value || "Your Name";

        if (previewJobTitle)
            previewJobTitle.textContent =
                jobTitle.value || "Professional Title";

        if (previewEmail)
            previewEmail.textContent =
                email.value || "example@email.com";

        if (previewPhone)
            previewPhone.textContent =
                phone.value || "+92 300 1234567";

        if (previewAddress)
            previewAddress.textContent =
                address.value || "City, Country";

        if (previewWebsite)
            previewWebsite.textContent =
                website.value || "linkedin.com";

        if (previewSummary)
            previewSummary.textContent =
                summary.value ||
                "Your professional summary will appear here.";

    }


    const inputs = [

        fullName,
        jobTitle,
        email,
        phone,
        address,
        website,
        summary

    ];

    inputs.forEach(input => {

        if (input) {

            input.addEventListener("input", updatePreview);

        }

    });

    updatePreview();

});

/*=====================================
    SCRIPT.JS - PART 2
    EDUCATION + EXPERIENCE + SKILLS
=====================================*/

// ===== FORM INPUTS =====

const degree = document.getElementById("degree");
const institute = document.getElementById("institute");
const eduStart = document.getElementById("eduStart");
const eduEnd = document.getElementById("eduEnd");
const grade = document.getElementById("grade");
const educationDescription = document.getElementById("educationDescription");

const experienceJobTitle = document.getElementById("experienceJobTitle");
const companyName = document.getElementById("companyName");
const companyLocation = document.getElementById("companyLocation");
const experienceStart = document.getElementById("experienceStart");
const experienceEnd = document.getElementById("experienceEnd");
const experienceDescription = document.getElementById("experienceDescription");

const skills = document.getElementById("skills");
const languages = document.getElementById("languages");
const certification = document.getElementById("certification");
const projects = document.getElementById("projects");
const interests = document.getElementById("interests");


// ===== PREVIEW =====

const previewEducation = document.getElementById("previewEducation");
const previewExperience = document.getElementById("previewExperience");
const previewSkills = document.getElementById("previewSkills");
const previewLanguages = document.getElementById("previewLanguages");
const previewCertification = document.getElementById("previewCertification");
const previewProjects = document.getElementById("previewProjects");
const previewInterests = document.getElementById("previewInterests");


// ===== UPDATE FUNCTION =====

function updateResumeSections(){

    if(previewEducation){

        previewEducation.innerHTML = `
            <strong>${degree?.value || "Degree"}</strong><br>
            ${institute?.value || "Institute"}<br>
            ${eduStart?.value || "Start"} - ${eduEnd?.value || "End"}<br>
            ${grade?.value || ""}<br>
            ${educationDescription?.value || ""}
        `;

    }

    if(previewExperience){

        previewExperience.innerHTML = `
            <strong>${experienceJobTitle?.value || "Job Title"}</strong><br>
            ${companyName?.value || "Company"} | ${companyLocation?.value || "Location"}<br>
            ${experienceStart?.value || ""} - ${experienceEnd?.value || ""}<br>
            ${experienceDescription?.value || ""}
        `;

    }

    if(previewSkills){

        previewSkills.textContent =
            skills?.value || "HTML, CSS, JavaScript";

    }

    if(previewLanguages){

        previewLanguages.textContent =
            languages?.value || "English, Urdu";

    }

    if(previewCertification){

        previewCertification.textContent =
            certification?.value || "No Certification";

    }

    if(previewProjects){

        previewProjects.textContent =
            projects?.value || "No Projects";

    }

    if(previewInterests){

        previewInterests.textContent =
            interests?.value || "Reading, Coding";

    }

}


// ===== EVENTS =====

[
degree,
institute,
eduStart,
eduEnd,
grade,
educationDescription,
experienceJobTitle,
companyName,
companyLocation,
experienceStart,
experienceEnd,
experienceDescription,
skills,
languages,
certification,
projects,
interests

].forEach(input=>{

    if(input){

        input.addEventListener("input",updateResumeSections);

    }

});


updateResumeSections();
/*=====================================
    SCRIPT.JS - PART 3
    LOCAL STORAGE + CLEAR FORM
=====================================*/

const formInputs = document.querySelectorAll("input, textarea");

// ===== SAVE DATA =====

function saveResumeData() {

    const resumeData = {};

    formInputs.forEach(input => {

        resumeData[input.id] = input.value;

    });

    localStorage.setItem(
        "cvBuilderData",
        JSON.stringify(resumeData)
    );

}

// ===== LOAD DATA =====

function loadResumeData() {

    const savedData = JSON.parse(
        localStorage.getItem("cvBuilderData")
    );

    if (!savedData) return;

    formInputs.forEach(input => {

        if (savedData[input.id] !== undefined) {

            input.value = savedData[input.id];

        }

    });

    if (typeof updatePreview === "function") {
        updatePreview();
    }

    if (typeof updateResumeSections === "function") {
        updateResumeSections();
    }

}

// ===== AUTO SAVE =====

formInputs.forEach(input => {

    input.addEventListener("input", saveResumeData);

});

// ===== LOAD WHEN PAGE OPENS =====

loadResumeData();

// ===== CLEAR FORM =====

const clearForm = document.getElementById("clearForm");

if (clearForm) {

    clearForm.addEventListener("click", () => {

        if (!confirm("Are you sure you want to clear the resume?")) {

            return;

        }

        formInputs.forEach(input => {

            input.value = "";

        });

        localStorage.removeItem("cvBuilderData");

        if (typeof updatePreview === "function") {
            updatePreview();
        }

        if (typeof updateResumeSections === "function") {
            updateResumeSections();
        }

        alert("Resume cleared successfully!");

    });

}

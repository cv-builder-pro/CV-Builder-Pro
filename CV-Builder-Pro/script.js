/*=====================================================
    CV BUILDER PRO
    SCRIPT.JS
    Version 1.0
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // INPUT ELEMENTS
    // ===========================

    const inputs = {

        fullName: document.getElementById("fullName"),
        jobTitle: document.getElementById("jobTitle"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        address: document.getElementById("address"),
        website: document.getElementById("website"),
        summary: document.getElementById("summary"),

        degree: document.getElementById("degree"),
        institute: document.getElementById("institute"),
        eduStart: document.getElementById("eduStart"),
        eduEnd: document.getElementById("eduEnd"),
        grade: document.getElementById("grade"),
        educationDescription: document.getElementById("educationDescription"),

        experienceJobTitle: document.getElementById("experienceJobTitle"),
        companyName: document.getElementById("companyName"),
        companyLocation: document.getElementById("companyLocation"),
        experienceStart: document.getElementById("experienceStart"),
        experienceEnd: document.getElementById("experienceEnd"),
        experienceDescription: document.getElementById("experienceDescription"),

        skills: document.getElementById("skills"),
        languages: document.getElementById("languages"),
        certification: document.getElementById("certification"),
        projects: document.getElementById("projects"),
        interests: document.getElementById("interests")
    };

    // ===========================
    // PREVIEW ELEMENTS
    // ===========================

    const preview = {

        name: document.getElementById("previewName"),
        jobTitle: document.getElementById("previewJobTitle"),
        email: document.getElementById("previewEmail"),
        phone: document.getElementById("previewPhone"),
        address: document.getElementById("previewAddress"),
        website: document.getElementById("previewWebsite"),
        summary: document.getElementById("previewSummary"),

        education: document.getElementById("previewEducation"),
        experience: document.getElementById("previewExperience"),
        skills: document.getElementById("previewSkills"),
        languages: document.getElementById("previewLanguages"),
        certification: document.getElementById("previewCertification"),
        projects: document.getElementById("previewProjects"),
        interests: document.getElementById("previewInterests")
    };

    // ===========================
    // SAFE TEXT FUNCTION
    // ===========================

    function text(value, fallback) {
        return value && value.trim() !== "" ? value : fallback;
    }

    // ===========================
    // UPDATE RESUME
    // ===========================

    function updateResume() {

        if (preview.name)
            preview.name.textContent =
                text(inputs.fullName.value, "Your Name");

        if (preview.jobTitle)
            preview.jobTitle.textContent =
                text(inputs.jobTitle.value, "Professional Title");

        if (preview.email)
            preview.email.textContent =
                text(inputs.email.value, "example@email.com");

        if (preview.phone)
            preview.phone.textContent =
                text(inputs.phone.value, "+92 300 1234567");

        if (preview.address)
            preview.address.textContent =
                text(inputs.address.value, "City, Country");

        if (preview.website)
            preview.website.textContent =
                text(inputs.website.value, "linkedin.com");

        if (preview.summary)
            preview.summary.textContent =
                text(
                    inputs.summary.value,
                    "Your professional summary will appear here."
                );

                // ===========================
        // EDUCATION
        // ===========================

        if (preview.education) {

            preview.education.innerHTML = `
                <strong>${text(inputs.degree.value, "Degree")}</strong><br>
                ${text(inputs.institute.value, "Institute")}<br>
                ${text(inputs.eduStart.value, "Start Year")} -
                ${text(inputs.eduEnd.value, "End Year")}<br>
                ${text(inputs.grade.value, "")}<br>
                ${text(inputs.educationDescription.value, "")}
            `;

        }

        // ===========================
        // EXPERIENCE
        // ===========================

        if (preview.experience) {

            preview.experience.innerHTML = `
                <strong>${text(inputs.experienceJobTitle.value, "Job Title")}</strong><br>
                ${text(inputs.companyName.value, "Company")}
                | ${text(inputs.companyLocation.value, "Location")}<br>
                ${text(inputs.experienceStart.value, "")}
                -
                ${text(inputs.experienceEnd.value, "")}<br>
                ${text(inputs.experienceDescription.value, "")}
            `;

        }

        // ===========================
        // SKILLS
        // ===========================

        if (preview.skills) {

            preview.skills.textContent =
                text(inputs.skills.value, "HTML, CSS, JavaScript");

        }

        // ===========================
        // LANGUAGES
        // ===========================

        if (preview.languages) {

            preview.languages.textContent =
                text(inputs.languages.value, "English, Urdu");

        }

        // ===========================
        // CERTIFICATION
        // ===========================

        if (preview.certification) {

            preview.certification.textContent =
                text(inputs.certification.value, "No Certification");

        }

        // ===========================
        // PROJECTS
        // ===========================

        if (preview.projects) {

            preview.projects.textContent =
                text(inputs.projects.value, "No Projects Added");

        }

        // ===========================
        // INTERESTS
        // ===========================

        if (preview.interests) {

            preview.interests.textContent =
                text(inputs.interests.value, "Reading, Coding");

        }

    }

    // ===========================
    // LIVE PREVIEW
    // ===========================

    Object.values(inputs).forEach(input => {

        if (input) {

            input.addEventListener("input", updateResume);

        }

    });

    updateResume();
            // ===========================
    // LOCAL STORAGE
    // ===========================

    function saveData() {

        const data = {};

        Object.keys(inputs).forEach(key => {

            if (inputs[key]) {

                data[key] = inputs[key].value;

            }

        });

        localStorage.setItem(
            "cvbuilderpro_data",
            JSON.stringify(data)
        );

    }

    function loadData() {

        const saved =
            JSON.parse(
                localStorage.getItem("cvbuilderpro_data")
            );

        if (!saved) return;

        Object.keys(saved).forEach(key => {

            if (inputs[key]) {

                inputs[key].value = saved[key];

            }

        });

        updateResume();

    }

    Object.values(inputs).forEach(input => {

        if (input) {

            input.addEventListener("input", saveData);

        }

    });

    loadData();

    // ===========================
    // CLEAR FORM
    // ===========================

    const clearBtn =
        document.getElementById("clearForm");

    if (clearBtn) {

        clearBtn.addEventListener("click", function () {

            if (!confirm("Clear all resume data?")) {

                return;

            }

            Object.values(inputs).forEach(input => {

                if (input) {

                    input.value = "";

                }

            });

            localStorage.removeItem(
                "cvbuilderpro_data"
            );

            updateResume();

            alert("Resume cleared successfully.");

        });

    }

    // ===========================
    // FORM VALIDATION
    // ===========================

    function validateForm() {

        if (!inputs.fullName.value.trim()) {

            alert("Please enter your full name.");

            inputs.fullName.focus();

            return false;

        }

        if (!inputs.email.value.trim()) {

            alert("Please enter your email.");

            inputs.email.focus();

            return false;

        }

        return true;

    }
            // ===========================
    // DOWNLOAD PDF
    // ===========================

    const downloadBtn =
        document.getElementById("downloadResume");

    if (downloadBtn) {

        downloadBtn.addEventListener("click", function () {

            if (!validateForm()) {

                return;

            }

            const resume =
                document.querySelector(".resume-paper");

            if (!resume) {

                alert("Resume Preview Not Found.");

                return;

            }

            const options = {

                margin: 0.3,

                filename:
                    (inputs.fullName.value || "Resume") + ".pdf",

                image: {
                    type: "jpeg",
                    quality: 1
                },

                html2canvas: {
                    scale: 2,
                    useCORS: true
                },

                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: "portrait"
                }

            };

            html2pdf()
                .set(options)
                .from(resume)
                .save();

        });

    }

    // ===========================
    // INITIAL LOAD
    // ===========================

    updateResume();

}); // DOMContentLoaded END

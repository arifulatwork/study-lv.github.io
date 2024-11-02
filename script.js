const programs = [
    {
        degreeLevel: 'bachelor',
        title: 'Architecture',
        institution: 'RISEBA University of Applied Sciences',
        degree: "Bachelor's Degree in Engineering in Architecture",
        location: 'Riga',
        language: 'English',
        duration: '3.5 years, Full-time',
        tuitionFees: '6400 EUR (EU, EEA), 8000 EUR (other countries) per year'
    },
    {
        degreeLevel: 'master',
        title: 'Architecture',
        institution: 'RISEBA University of Applied Sciences',
        degree: 'Professional Master\'s Degree in Architecture',
        qualification: 'Architect',
        location: 'Riga',
        language: 'English',
        duration: '2 years, Full-time (Evening Studies)',
        tuitionFees: '6700 EUR (EU, EEA, EU candidates), 8400 EUR (other countries) per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Aviation Transport',
        institution: 'Riga Technical University',
        degree: 'Professional bachelor degree in aviation transport / aircraft maintenance engineer',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '3220 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Business Administration',
        institution: 'Turiba University',
        degree: "Professional Bachelor's Degree in Business Administration",
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2990 - 3550 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Business Logistics Management',
        institution: 'Turiba University',
        degree: "Professional Bachelor's Degree in Business Administration",
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2990 - 3550 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Business Management',
        institution: 'RISEBA University of Applied Sciences',
        degree: "Professional bachelor's degree in business management",
        location: 'Riga',
        language: 'English',
        duration: '4 years (full-time) / 4.5 years (part-time)',
        tuitionFees: '3000 - 3700 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Business Process Management',
        institution: 'BA School of Business and Finance',
        degree: 'Bachelor of Business Administration',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '1906 EUR / semester'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Caritative Social Work',
        institution: 'European Christian Academy',
        degree: 'Professional bachelor',
        location: 'Jūrmala',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '3000 EUR'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Computer Systems',
        institution: 'Turiba University',
        degree: "Professional Bachelor's Degree in Computer Systems",
        location: 'Riga',
        language: 'English',
        duration: '4 or 4.4 years, Full-time',
        tuitionFees: '2550 EUR per year for EU/EEA, Switzerland, CIS countries, Georgia and Ukraine citizens; 3550 EUR per year for citizens of other countries'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Economics',
        institution: 'Latvia University of Life Sciences and Technologies',
        degree: 'Bachelor Degree of Social Sciences in Economics',
        location: 'Jelgava',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2500 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Engineer of Programming',
        institution: 'Rezekne Academy of Technologies',
        degree: 'Professional bachelor study programmes',
        location: 'Rezekne',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2330 - 3790 EUR'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Entrepreneurship',
        institution: 'Rezekne Academy of Technologies',
        degree: "Professional bachelor's degree in business",
        location: 'Rezekne',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '1630 - 2400 EUR'
    },
    {
        degreeLevel: 'bachelor',
        title: 'European Business Studies',
        institution: 'RISEBA University of Applied Sciences',
        degree: 'Professional Bachelor in European Business and a qualification of Business Executive',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '4500 - 6000 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Information Technologies for Sustainable Development',
        institution: 'Latvia University of Life Sciences and Technologies',
        degree: 'Professional Bachelor Degree in Information Technologies/ Qualification: Programming Engineer',
        location: 'Jelgava',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2500 EUR / Year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Information Technologies (Programming)',
        institution: 'EKA University of Applied Sciences',
        degree: 'Professional Bachelor Degree in Computer Science and Programming Engineer',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2950 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Information Technology',
        institution: 'Vidzeme University of Applied Sciences',
        degree: "Professional bachelor's degree in information technologies",
        location: 'Valmiera',
        language: 'English',
        duration: '4 years (full-time) or 5 years (part-time)',
        tuitionFees: '3362 EUR per year (3370 EUR for Non-EU Citizens)'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Information Technology',
        institution: 'Liepaja University',
        degree: 'Professional bachelor Degree in Information Technology, qualification of Software Engineer',
        location: 'Liepaja',
        language: 'English',
        duration: '4 years',
        tuitionFees: '2500 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Intercultural Communication',
        institution: 'Ventspils University of Applied Sciences',
        degree: 'Professional Bachelor\'s degree in intercultural communication',
        location: 'Ventspils',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2000 - 3500 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'International Communication Management',
        institution: 'Turiba University',
        degree: 'Professional Bachelor\'s Degree in Communication Management',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2990 EUR per year for EU/EEA, CIS countries, Georgia and Ukraine citizens, 3550 EUR per year for Citizens of other countries (2021)'
    },
    {
        degreeLevel: 'bachelor',
        title: 'International Finance (BBA/BFIN)',
        institution: 'BA School of Business and Finance',
        degree: 'Professional bachelor\'s degree in finance',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2860 EUR (semester) / 5720 EUR (first year)'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Mechatronics',
        institution: 'Rezekne Academy of Technologies',
        degree: 'Professional bachelor degree in mechatronics',
        location: 'Rezekne',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '2330 - 3790 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Medical Engineering and Medical Physics',
        institution: 'Riga Technical University',
        degree: 'Professional bachelor degree in medical physics / medical physical technology engineer',
        location: 'Riga',
        language: 'English',
        duration: '4.5 years, Full-time',
        tuitionFees: '4600 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Public Relations and Advertising Management',
        institution: 'RISEBA University of Applied Sciences',
        degree: 'Professional bachelor\'s degree in advertising and public relations with qualification – advertising manager or public relations manager',
        location: 'Riga',
        language: 'English',
        duration: '4 years',
        tuitionFees: '2500/4500 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Smart Electronic Systems',
        institution: 'Riga Technical University',
        degree: 'Professional bachelor degree in electrical engineering / electronics engineer',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '3080 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Sociology of Organizations and Public Administration',
        institution: 'Latvia University of Life Sciences and Technologies',
        degree: 'Bachelor Degree of Social Sciences in Sociology',
        location: 'Jelgava',
        language: 'English',
        duration: '3 years, Full-time',
        tuitionFees: '2500 EUR per year'
    },
    {
        degreeLevel: 'bachelor',
        title: 'Transport Engineering',
        institution: 'Riga Technical University',
        degree: 'Professional bachelor degree in transport engineering / transport engineer',
        location: 'Riga',
        language: 'English',
        duration: '4 years, Full-time',
        tuitionFees: '3220 EUR per year'
    }
    // ... Add the remaining programs here
];

function filterPrograms() {
    const selectedLevel = document.getElementById('degree-level').value;
    const programList = document.getElementById('program-list');

    // Clear out previous program list
    programList.innerHTML = '';

    programs.forEach(program => {
        // Check if the program matches the selected filter level
        if (selectedLevel === 'all' || program.degreeLevel === selectedLevel) {
            const programElement = document.createElement('div');
            programElement.className = 'program';
            programElement.style.display = 'block'; // Ensure the program element is displayed

            programElement.innerHTML = `
                <h2>${program.title}</h2>
                <p><strong>Institution:</strong> ${program.institution}</p>
                <p><strong>Degree:</strong> ${program.degree}</p>
                ${program.qualification ? `<p><strong>Qualification:</strong> ${program.qualification}</p>` : ''}
                <p><strong>Location:</strong> ${program.location}</p>
                <p><strong>Language:</strong> ${program.language}</p>
                <p><strong>Duration:</strong> ${program.duration}</p>
                <p><strong>Tuition Fees:</strong> ${program.tuitionFees}</p>
            `;
            programList.appendChild(programElement);
        }
    });
}

// Initialize the filter on page load
window.onload = filterPrograms;

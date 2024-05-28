const report = require('multiple-cucumber-html-reporter');
const fs = require("fs");

function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const startDate = new Date();
fs.writeFileSync('.start', startDate.toString());

function calculateDurationAndGenerateReport() {
    const startDateStr = new Date(fs.readFileSync('.start', 'utf8'));
    const endDate = new Date();
    const durationInSeconds = (endDate - startDateStr) / 1000;
    
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    // Generate Test Report
    report.generate({
        jsonDir: 'cypress/cucumber-json',
        reportPath: 'cypress/Reports/',
        metadata:{
            browser: {
                name: 'chrome',
                version: '90'
            },
            device: 'Local test machine', 
            platform: {
                name: 'windows',
                version: '10'
            }
        },
        customData: {
            title: 'Run Informations',
            data: [
                {label: 'Project name: ', value: 'SIAIT 2024'},
                {label: 'Release: ', value: '1.0'},
                {label: "Environment: " , value: "UI tests" }, 
                {label: 'Project Manager: ', value: 'Slim Kammoun'},
                {label: 'QA Team: ', value: 'Radhia Manai'},
                {label: 'Execution Start Time: ', value: formatDate(startDateStr)},
                {label: 'Execution End Time', value: formatDate(endDate)},
                {label: 'Duration in seconds', value: `${durationInSeconds} seconds`},
              //  {label: 'Duration', value: `${minutes} m et ${seconds} s.`},
            ]
        }
    });

    // Delete file .start after generating report
    fs.unlinkSync('.start');
}

// call immediately function to calculate duration and generate report
calculateDurationAndGenerateReport();

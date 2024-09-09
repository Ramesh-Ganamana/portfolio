
const professionalSummary = {
    title: "Professional Summary",
    description: [
        	"I have 2 years of experience in software testing and QE Automation of Web and Mobile based applications.", 
        	"Having good knowledge of Software Testing Life Cycle and Bug Life Cycle.",
        	"Good experience on automation tools such as Playwright, WebDriver IO, Selenium WebDriver with different programming languages.",
        	"Good hands-on experience in various testing types like Smoke, Usability Testing, Functional, Regression and Retesting.",
        	"Detail oriented person with good technical troubleshooting / problem-solving skills.",
        	"Able to find bottlenecks and thresholds in existing code with the help of automation tools.",
        	"As a trainee, I worked on several projects assisting senior team members for 6 months.",
        	"Extremely passionate about learning cutting edge technologies to meet new business challenges and demands.",
        	"Having experience in working with Event management, Retail and Logistics domain projects.",
            "Good oral and written communication skills."
        
    ]
};

// Load Professional Summary into HTML
function loadProfessionalSummary() {
    const summaryContainer = document.getElementById("summary-content");
    
    // Create a <ul> element to contain the list items
    const summaryList = document.createElement('ul');

    // Loop through the description array and create list items
    professionalSummary.description.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        summaryList.appendChild(listItem);
    });
    
    // Insert the list into the container
    summaryContainer.innerHTML = ''; // Clear any existing content
    summaryContainer.appendChild(summaryList);
}

// Project Content Data
const projectContent = {
    encore: `
        <h3>Encore Project</h3>
        <p><strong>Client:</strong> Encore</p>
        <p><strong>Domain:</strong> Event Management</p>
        <p><strong>Role:</strong> QA Automation Engineer</p>
        <ul>
            <li>Developed BDD Cucumber framework with WebDriver IO using JavaScript.</li>
            <li>Executed all test cases and integrated them with Jenkins.</li>
            <li>Developed all assigned test cases by given timeline using previously built testing framework.</li>
            <li>Integrated in Jenkins and executed all developed testcases in Jenkins weekly basis</li>
            <li>Identified, analyzed, and troubleshooted automation script failures, provided timely resolutions.</li>
            <li>Debugged and reported defects with detailed information to facilitate efficient issue resolution.</li>
            <li>Applied corrective measures to enhance the reliability and accuracy of the test cases, ensuring robust and consistent results</li>
            
        </ul>
    `,
    eos: `
        <h3>EOS Project</h3>
        <p><strong>Client:</strong> OnTrac</p>
        <p><strong>Domain:</strong> Logistics</p>
        <p><strong>Role:</strong> QA Automation Engineer</p>
        <ul>
             <li> Manually executed all test cases assigned in azure devOps board.</li>
             <li> Thoroughly analyzed project framework given by clients and understood reusable components, structured page representation.</li>
             <li> Developed test scripts for assigned test cases in azure board in that EOS framework and committed into git.</li>
             <li> Created a pipeline in azure board and executed the test cases systematically in azure.</li>
             <li> Developed test scripts using Selenium and Python with the PyTest framework.</li>
             <li> Executed scripts in Azure DevOps and integrated them with the Azure pipeline.</li>
             <li> Analyzed and fixed test script failures to maintain project efficiency.</li>
             <li> Integrate PyTest HTML reports and append screenshots of failed test cases, including the test case name and module name.</li>
             <li> Facilitated effective communication with clients using Azure Boards to track project progress, manage tasks, ensure timely delivery, streamline collaboration, improve transparency, and promptly address issues.</li>
         
        </ul>
    `,
    eosMobile: `
        <h3>EOS (Android & iOS) Project</h3>
        <p><strong>Client:</strong> OnTrac_Onroute</p>
        <p><strong>Domain:</strong> Logistics</p>
        <p><strong>Role:</strong> QA Automation Engineer</p>
        <ul>
            <li> Developed  reusablePyTest framework using Selenium and Python for Android and IOS.</li>
            <li> Executed the test cases in Azure pipeline for mobile app testing.</li>
            <li> Thoroughly analyzed project framework given by clients and understood reusable components, structured page representation.</li>
            <li> Developed test scripts for assigned test cases in azure board in that EOS framework and committed into git.</li>
            <li> Created a pipeline in azure board and executed the test cases systematically in azure.</li>
            <li> Developed test scripts using Selenium and Python with the PyTest framework.</li>
            <li> Executed scripts in Azure DevOps and integrated them with the Azure pipeline.</li>
            <li> Analyzed and fixed test script failures to maintain project efficiency.</li>
            <li> Integrate PyTest HTML reports and append screenshots of failed test cases, including the test case name and module name.</li>
            <li> Facilitated effective communication with clients using Azure Boards to track project progress, manage tasks, ensure timely delivery, streamline collaboration, improve transparency, and promptly address issues.</li>
        </ul>
    `
};

// Function to show project details when a button is clicked
function showContent(projectId) {
    const contentElement = document.getElementById('project-content');
    
    // Ensure projectId exists in the projectContent object
    if (projectContent[projectId]) {
        contentElement.innerHTML = projectContent[projectId];
    } else {
        contentElement.innerHTML = '<p>Project details not available.</p>';
    }
}

// Event listener to load Professional Summary and default project content when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadProfessionalSummary();  // Load the professional summary
    showContent('encore');  // Load the default project (Encore)
});

document.addEventListener('DOMContentLoaded', () => {
    const coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
});


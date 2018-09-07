let currentIndex = 0;

var views = {
    setupEventListeners: function(){
        
    },
    showSection(section){
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },
    showProject(index){
        var project;
        var status;
        var tempIndex = currentIndex;
        var projectsLength = Object.keys(projects).length;
        var projectName = document.getElementById('project-name');
        var projectLanguage = document.getElementById('project-language');
        var projectStatus = document.getElementById('project-status');
        var dateCreated = document.getElementById('date-created');
        var projectDescription = document.getElementById('project-description');
        var iframe = document.querySelector('iframe');
        var img = document.getElementById('project-preview');
        
        currentIndex += index;
        if(currentIndex <= -1 || currentIndex >= projectsLength+1){
            currentIndex = tempIndex;
            return false;
        }

        project = projects[currentIndex]
        projectName.innerHTML = project.name;
        projectStatus.innerHTML = project.status;
        dateCreated.innerHTML = project.dateCreated;
        projectLanguage.innerHTML = project.language;
        projectDescription.innerHTML = project.description;
        status = project.status;
        


        if(status == "Deployed"){
            iframe.style.display = 'block'
            img.style.display = 'none'; 
            iframe.src = project.url;
        }
        else{
            img.style.display = 'block';
            iframe.src = "";
            iframe.style.display = 'none';
            // image.src = project.url;
        }

    }
}

var projects = [
    {
        name: "King's Cup",
        dateCreated: "2015",
        status: "Local",
        language: "C",
        description: "A terminal-based game that was made to mimic the King's Cup drinking game without the cards."
    },
    //tiyangge dash
    {
        name: "Tiyangge Dash",
        dateCreated: "2016",
        status: "Local",
        language: "Java",
        description: "A Java game created for the utility of array structures."
    },
    {
        name: 'Grinding Gary',
        dateCreated: '2017-1-2',
        status: "Deployed",
        language: "Javascript, HTML5, Bootstrap, Jquery",
        url: "http://grindinggary.000webhostapp.com/",
        description: "It is a Javascript-based game that was created for a project in college. It was created together with Nuj Valaquio."
    },
    {
        name: 'PCPPI Careers',
        dateCreated: '2017-1-2',
        status: "Deployed",
        language: "Laravel, PHP, HTML, JQuery, Bootstrap",
        url: "",
        description: "It is a website created during my OJT days in Pepsi."
    } 
    //drunk dave
    
    //Ball Time
    //Orgy
    //TIJEC
];


views.showProject(0);
console.log(window.innerWidth,window.innerHeight)

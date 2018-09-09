let currentIndex = 0;
var views = {
    showMenu: function(){
        var ul = document.getElementById('nav-links')
        var menu = document.querySelector(ul);
        var sections = document.getElementById('sections');
        
        
        if (menu.className === "passive") {
            menu.className = "active";
            // sections.style.paddingTop = "260px";
        } else {
            menu.className = "passive";
            
            // sections.style.paddingTop = "65px";
        }
    },
    setupEventListeners: function(){
        
    },
    showSection(section){
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
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
        
        img.style.display = 'block';
        img.src = project.url;

    }
}

var projects = [
    {
        name: "Tiyangge Dash",
        dateCreated: "2016",
        status: "Local",
        language: "Java",
        description: "A Java game created for the utility of array structures.",
        url:"resources/images/tiyanggedash.jpg",
    },
    {
        name: "King's Cup",
        dateCreated: "2015",
        status: "Local",
        language: "C",
        description: "A terminal-based game that was made to mimic the King's Cup drinking game without the cards."
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


let currentIndex = 0;
var views = {
    showMenu: function(){
        var menu = document.getElementById('nav-links');
        var sections = document.getElementById('sections');
        
        if (menu.className === "passive") {
            menu.className = "active";
            menu.style.display = "block";
            menu.style.marginTop = "70px";
        } else {
            menu.style.display = "none";
            menu.className = "passive";
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
        name: "Drunk Dave",
        dateCreated: "2015",
        status: "Local",
        language: "Java",
        description: "A Java game created with Nuj Valaquio, Aya Somil, and Justin Madriaga. Drunk Dave should avoid cars in the highway and must not get hit.",
        url:"resources/images/drunkdave.jpg",
    },
    {
        name: "Tiyangge Dash",
        dateCreated: "2016",
        status: "Local",
        language: "Java",
        description: "A Java game created for the utility of array structures. It is similar to the popular game 'Diner Dash'",
        url:"resources/images/tiyanggedash.jpg",
    },
    {
        name: 'Grinding Gary',
        dateCreated: '2017-1-2',
        status: "Deployed (http://grindinggary.000webhostapp.com/)",
        language: "Javascript, HTML5, Bootstrap, Jquery",
        url: "resources/images/grindinggary.png",
        description: "It is a Javascript-based game that was created for a project in college. It was created together with Nuj Valaquio."
    },
    {
        name: 'PCPPI Careers',
        dateCreated: '2017-1-2',
        status: "Local",
        language: "Laravel, PHP, HTML, JQuery, Bootstrap",
        url: "resources/images/pcppi.png",
        description: "It is a website created during my OJT days in Pepsi."
    } ,
    {
        name: 'Ball Time',
        dateCreated: '2018',
        status: "Local",
        language: "AngularJS, Ionic, Google Firebase, Google Maps",
        url: "resources/images/balltime.jpg",
        description: "My thesis in college. It is a mobile app that helps basketball player find and join hosted basketball courts and play against others"
    }
    
];


views.showProject(0);


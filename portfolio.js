// import { projects } from './data';
let currentPage = 'home';

var views = {
    setupEventListeners: function(){
        
    },
    showSection(section){
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    // }
    // showHome: function(){
        
    //     document.getElementById('home').style.display = "block";
    //     // document.getElementById(currentPage).style.display = "block";
    //     // window.alert('whoa');
    //     // document.getElementById('project-name').innerHTML = projects.grindingGary.name;
    //     currentPage = 'home';
    // },
    // showProjects: function(){
        
    //     document.getElementById('projects').style.display = "block";
    //     document.getElementById(currentPage).style.display = "none";
    //     // window.alert('whoa');
    //     document.getElementById('project-name').innerHTML = projects.pepsi.name;
    //     currentPage = 'projects';
    // },
    // showAboutMe: function(){
    //     document.getElementById('about-me').scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start' // scroll to top of target element
    //     })
    // }
}

var  projects = {
    grindingGary: {
        name: 'Grinding Gary',
        dateCreated: '2017-1-2',
        description: "It is a Javascript-based game that was created for a project in college"
    },
    pepsi: {
        name: 'PCPPI Careers',
        dateCreated: '2017-1-2',
        description: "It is a website created during my OJT days in Pepsi."
    }   
}

console.log(window.innerWidth,window.innerHeight)

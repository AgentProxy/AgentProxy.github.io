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
}

var  projects = {
    kingsCup:{
        name: "King's Cup",
        dateCreated: "2015",
        status: "Local",
        description: "A terminal-based game that was made to mimic the King's Cup drinking game without the cards."
    },
    grindingGary: {
        name: 'Grinding Gary',
        status: "Deployed",
        link: "www.grindinggary.000webhostapp.com",
        dateCreated: '2017-1-2',
        description: "It is a Javascript-based game that was created for a project in college. It was created together with Nuj Valaquio."
    },
    pepsi: {
        name: 'PCPPI Careers',
        dateCreated: '2017-1-2',
        description: "It is a website created during my OJT days in Pepsi."
    }  
    //drunk dave
    //tiyangge dash
    //Ball Time
    //Orgy
    //
}

console.log(window.innerWidth,window.innerHeight)
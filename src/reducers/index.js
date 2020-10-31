import {
    projects,
    socials,
    personalInfo,
    aboutMeLabels,
    footerLinks,
    tabs,
    skills,
    goals,
    hireModalData,
    navbarData,
} from "./storage";


const initialState = {
    language: 'it',
    allProjects: projects.en,
    socials: socials,
    personalInfo: personalInfo,
    footerLinks: footerLinks,
    tabs: tabs,
    skills: skills,
    goals: goals,
    aboutMeLabels: aboutMeLabels,
    hireModalData: hireModalData,
    navbarData: navbarData,
    projects: projects.en,
    message: 'hello',
    selectedProjectId: 1,
    formModal: false,
    hireModal: false,
    emailFocus: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'HELLO_WORLD':
            return {
                ...state,
                message: action.payload,
            };
        case 'SELECT_PROJECT_MODAL':
            const id = action.payload;
            return {
                ...state,
                selectedProjectId: id,
                showProjectModal: !state.showProjectModal,
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                formModal: !state.formModal,
            }
        case 'TOGGLE_HIRE_MODAL':
            return {
                ...state,
                hireModal: !state.hireModal,
            }
        case 'FILTER_PROJECTS':
            const filter = action.payload;

            if(filter === 'all'){
                const filteredProjects = state.allProjects;
                return {
                    ...state,
                    projects: filteredProjects,
                }
            }
            const filteredProjects = state.allProjects.filter(item => item.category === filter);
            return {
                ...state,
                projects: filteredProjects,

            }
        case 'SEARCH_PROJECT':
            const searchProjects = state.allProjects.filter(project => {
                return project.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
            });
            return {
                ...state,
               projects: searchProjects,
            }
        case'EMAIL_FOCUS':
            return {
                ...state,
                emailFocus: !state.emailFocus,
            }
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;
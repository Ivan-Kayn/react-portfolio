const helloWorld = (message) => {
    return {
        type: 'HELLO_WORLD',
        payload: message
    };
};

const selectProject = (id) => {
  return {
      type: 'SELECT_PROJECT_MODAL',
      payload: id,
  }
};
const toggleModal = () => {
    return{
        type: 'TOGGLE_MODAL',
    }

};
const filterProjects = (filter) => {
    return{
        type: 'FILTER_PROJECTS',
        payload: filter,
    }
};
const searchProject = (search) => {
    return {
        type: 'SEARCH_PROJECT',
        payload: search,
    }
}

const toggleHireModal = () => {
    return{
        type: 'TOGGLE_HIRE_MODAL'
    }
}

const onEmailFocus = () => {
    return {
        type: 'EMAIL_FOCUS',
    }
}

const onChangeLanguage = (language) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: language,
    }
}

export {
    helloWorld,
    selectProject,
    toggleModal,
    filterProjects,
    searchProject,
    toggleHireModal,
    onEmailFocus,
    onChangeLanguage,

}
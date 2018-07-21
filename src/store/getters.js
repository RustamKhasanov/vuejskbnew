export default {
  getSectionsByParentID: state => SECTION_ID => {
    return state.sections.filter(section => section.SECTION_ID === SECTION_ID)
  },
  getSectionByID: state => ID => {
    return state.sections.find(section => section.ID === ID)
  },
  getElementsByParentID: state => SECTION_ID => {
    return state.elements.filter(element => element.SECTION_ID === SECTION_ID)
  },
  getElementByID: state => ID => {
    return state.elements.filte(element => element.ID === ID)
  },
  getCountSection: state => SECTION_ID => {
    return state.sections.filter(section => section.SECTION_ID === SECTION_ID).length + state.elements.filter(element => element.SECTION_ID === SECTION_ID)
  },
  getUsersByParams: state => id => {
    return state.users.filter(user => user.ACTIVE)
  },
  getUserByID: state => ID => {
    return state.users.find(user => user.ID === ID)
  },
  getviewType: state => type => {
    return state.settings[type]
  }
}

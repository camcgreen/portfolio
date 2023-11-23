export const findProjIndex = (obj, id) => {
  const keys = Object.keys(obj)
  return keys.findIndex((key) => key === id)
}

export const getPageTitle = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Cameron Green - Software Developer'
    case '/projects/jobstasy':
      return 'Projects - Jobstasy'
    case '/projects/chatbox':
      return 'Projects - Chatbox'
    default:
      break
  }
}

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

function isiPad() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  const iPad =
    userAgent.match(/(iPad)/) /* iOS pre 13 */ ||
    (navigator.platform === 'MacIntel' &&
      navigator.maxTouchPoints > 1) /* iPad OS 13 */

  return iPad
}

export const detectMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  // Check for phones
  if (/android/i.test(userAgent)) {
    return true
  }

  // Check for iPhone
  if (/iPhone/.test(userAgent) && !window.MSStream) {
    return true
  }

  // Check for iPad
  if (isiPad()) {
    return true
  }

  // Check for other mobile devices
  if (/Mobile|mini|Fennec|Windows Phone/i.test(userAgent)) {
    return true
  }

  return false
}

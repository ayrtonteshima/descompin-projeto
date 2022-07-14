/**
 * getFolders()
 * saveFolder()
 * savePinInFolder()
 */

export const getFolders = () => {
  return JSON.parse(localStorage.getItem('folders')) || []
}
import gallery from '../Views/components/profil/gallery'
import gallerySort from './gallerySort'
import lightbox from './mediaModal'

const customSelect = (medias) => {
  const button = document.getElementById('selected-opt')
  const listbox = document.getElementById('options-list')
  const options = document.querySelectorAll('[role=option]')
  const firstItem = document.querySelector('[role=option]')

  /**
   * Set focus on the first item if no aria-activedescendant
   */
  const setUpFocus = () => {
    if(listbox.getAttribute('aria-activedescendant')){
      return
    }
    focusFirstItem()
  }
    
  /**
   * Execute focusItem on first item
   */
  const focusFirstItem = () => {
    if(firstItem){
      focusItem(firstItem)
    }
  }

  /**
   * Set focus on an item. Class focus on item & aria-activedescendant on listbox
   * @param {object} item 
   */
  const focusItem = (item) => {
    let focusedItem = document.querySelector('.focused')
    if(focusedItem){
      focusedItem.classList.remove('focused')
    }

    item.classList.add('focused')
    listbox.setAttribute('aria-activedescendant', item.id)
  }

  /**
   * Select a item and hide listbox
   */
  const selectItem = () => {
    let focusedItem = document.querySelector('.focused')
    button.textContent = focusedItem.textContent
    hideList()
  }

  /**
   * Get previous item when use down arrow
   */
  const getPreviousItem = () => {
    let focusedItem = document.querySelector('.focused')

    if(!focusedItem.previousSibling){
      return
    }

    let nextItem = focusedItem.previousSibling
    focusItem(nextItem)
  }

  /**
   * Get next item when use up arrow 
   */
  const getNextItem = () => {
    let focusedItem = document.querySelector('.focused')

    if(!focusedItem.nextSibling){
      return
    }

    let nextItem = focusedItem.nextSibling
    focusItem(nextItem)
  }

  /**
   * Add listener on keyboard
   */
  const keyEventsListener = () => {
    listbox.addEventListener('keydown', keyEvents)
  }

  /* Add listener on focus list to trigger listener on keyboad */
  listbox.addEventListener('focus', keyEventsListener)

  /**
   * Execute functions depending on keys pressed
   * @param event  
   */
  const keyEvents = (e) => {
    let key = e.which || e.keycode
    e.preventDefault()

    if(key === 40){
      getNextItem()
    }
    if(key === 38){
      getPreviousItem()
    }
    if(key === 13 || key === 32){
      selectItem()
    }
  }
    
  /**
   * Show the list of options
   */
  const showList = () => {
    listbox.classList.remove('hidden')
    button.setAttribute('aria-expanded', true)
    listbox.focus()
    /*setUpFocus()*/
  }
  button.addEventListener('click', showList)

  /**
   * Sort medias
   */
  let observer = new MutationObserver( (mutationRecords) => sortMedias(mutationRecords, medias))

  observer.observe(listbox, {attributes: true, attributeOldValue: true, attributeFilter: ['aria-activedescendant']})

  const sortMedias = (records, medias) => {
    let mediaSorted = medias
    let sort = false
    let sortFilter = document.querySelector('#options-list').getAttribute('aria-activedescendant')

    if(records[0].oldValue !== sortFilter){
      sort = true

      mediaSorted = medias.sort((a, b) => {
        if(sortFilter === 'popular'){
          return b.likes - a.likes
        }

        if(sortFilter === 'date'){
          let da = new Date(a.date)
          let db = new Date(b.date)
          return db - da
        }

        if(sortFilter === 'title'){
          let titleA = a.title.toLowerCase()
          let titleB = b.title.toLowerCase()

          if( titleA < titleB){
            return -1
          }
          if( titleA > titleB){
            return 1
          }
          return 0
        }
      })

      gallerySort(mediaSorted)    
    } 
  }
   
  /**
   * Hide the list of options and trigger medias sort
   */
  const hideList = () => {
    listbox.classList.add('hidden')
    button.removeAttribute('aria-expanded')
  }
  listbox.addEventListener('blur', hideList)

  /* Focus item and select on mouse click    */
  const clickItem = e => {
      focusItem(e.target)
      selectItem()
  }
  options.forEach(option =>  option.addEventListener("click", (e) =>clickItem(e)))
}

export default customSelect;
    

import gallerySort from './gallerySort'

const customSelect = (medias) => {
  const button = document.getElementById('selected-opt')
  const listbox = document.getElementById('options-list')
  const options = document.querySelectorAll('[role=option]')

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
  const keyEvents = e => {
    e.preventDefault()

    if(e.code === 'Enter' || e.code === 'Space'){
      selectItem()
    }
  }
    
  /**
   * Show the list of options
   */
  const showList = () => {
    listbox.classList.remove('hidden')
    button.setAttribute('aria-expanded', true)
    if(listbox.getAttribute('aria-activedescendant')){
      document.getElementById(listbox.getAttribute('aria-activedescendant')).focus()
    } else {
      document.querySelector('li').focus()
    }
  }
  button.addEventListener('click', showList)

  /**
   * Sort medias
   */
  let observer = new MutationObserver( (mutationRecords) => sortMedias(mutationRecords, medias))

  observer.observe(listbox, {attributes: true, attributeOldValue: true, attributeFilter: ['aria-activedescendant']})

  const sortMedias = (records, medias) => {
    let mediaSorted = medias
    let sortFilter = document.querySelector('#options-list').getAttribute('aria-activedescendant')

    if(records[0].oldValue !== sortFilter){
      mediaSorted = medias.sort((a, b) => {
        if(sortFilter === 'popular'){
          return b.likes - a.likes
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
    focusItem(e)
    selectItem()
  }

  /*Add listeners on options */
  options.forEach(option =>  option.addEventListener("click", e => clickItem(e.target)))
  options.forEach(option =>  option.addEventListener("keydown", e => {
   if(e.code === 'Enter'){
      clickItem(option)
   }
  }))
}

export default customSelect
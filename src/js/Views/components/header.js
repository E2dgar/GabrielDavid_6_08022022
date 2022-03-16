import { createDOMElement } from '../../services'

const header = (title) => {
  const header = document.querySelector('header')

  /*Create logo link only if not exist*/
  if(!document.querySelector('header a')){
    const link = createDOMElement('a', ['data-link', 'logo-link'], [{name: 'href', value: '#'}])

    const logo = createDOMElement("img", ['logo'], [ {name: 'alt', value: 'Fisheye Home page'},
                                                    {name: 'src', value: 'assets/images/logo.png'}])
    
    link.append(logo)
    header.append(link)
  }
  
  /*Create header h1 only if not exist & only on home. (Title is not passed to header() in profil page) */
  if(!document.querySelector('header h1') && title){
    const headerTitle = createDOMElement('h1', '', '', title)
    header.append(headerTitle)
  }

  /*Remove homepage header h1 when navigate to profil page */
  if(!document.querySelector('body').classList.contains('home-page')){
    document.querySelector('header h1').remove()
  }
}

export default header
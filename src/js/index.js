import '../scss/main.scss'
import { getData } from './services'
import HomeController from './Controller/HomeController'
import ProfilController from './Controller/ProfilController'

const { photographers } = await getData()

window.onload = () => {
  if(window.location.hash){
    ProfilController(photographers, window.location.hash.substring(1))
  }
  history.pushState(null, null,  window.location.pathname + window.location.hash)

  const links = document.querySelectorAll('.data-link')
  let url = ''

  links.forEach(element => { element.addEventListener('click', e => {
        e.preventDefault()
        url = e.target.closest('a').href
        history.pushState(null, null, window.location.pathname + url)
    })
  })

  HomeController(photographers)
}

const renderPage = () => {
  const hash = window.location.hash.substring(1)

  if(hash !== '' && hash !== 'main-content'){
    ProfilController(photographers, hash)
  }else {
    HomeController(photographers)
  }
}

window.onpopstate = renderPage
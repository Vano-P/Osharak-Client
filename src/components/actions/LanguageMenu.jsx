import Dropdown from '../ui/Dropdown'
import { FiGlobe } from 'react-icons/fi'
import i18n from 'i18next'

const LanguageMenu = () => {
  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
  }

  return (
    <Dropdown trigger={<FiGlobe size={20} />} >
      <button onClick={() => changeLang('en')}>EN</button>
      <button onClick={() => changeLang('ru')}>RU</button>
      <button onClick={() => changeLang('am')}>AM</button>
    </Dropdown>
  )
}

export default LanguageMenu

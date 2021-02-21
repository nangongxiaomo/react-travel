import i18n from 'i18next'
import { SET_LANGUAGE, languageActionTypes } from './actionCreators'

interface List {
  name: string
  code: string
}

export interface Language {
  language: 'en' | 'zh'
  languageList: List[]
}

const languageState: Language = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export default (state = languageState, action: languageActionTypes) => {
  switch (action.type) {
    case SET_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }

    default:
      return state
  }
}

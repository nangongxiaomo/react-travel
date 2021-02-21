
export const SET_LANGUAGE = 'SET_LANGUAGE'

type lang = 'zh' | 'en'

interface setLanguageAction {
  type: typeof SET_LANGUAGE
  payload: lang
}

export type languageActionTypes = setLanguageAction

export const setLanguage = (language: lang): setLanguageAction => ({
  type: SET_LANGUAGE,
  payload: language
})

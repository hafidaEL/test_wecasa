export const getUser = state => state.user 

export const getUserAdress = state => getUser(state).adress

export const getAnswerApi = state => getUser(state).answerApi
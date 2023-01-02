type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

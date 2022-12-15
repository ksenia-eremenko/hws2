const initState = {
    isLoading: false,
}
export type StateType = {
    isLoading: boolean
}

type ActionsType = LoadingActionType;

export const loadingReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return { ...state, isLoading: action.isLoading }

        default:
            return state
    }
}

export type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

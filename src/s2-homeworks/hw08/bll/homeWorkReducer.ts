import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up' ) {
                return [...state].sort((a,b) => a.name.localeCompare(b.name))
            } else {
                return [...state].sort((a,b) => a.name.localeCompare(b.name)).reverse();
            }
        }
        case 'check': {
            return state.filter(e => e.age >= 18);
        }
        default:
            return state
    }
}

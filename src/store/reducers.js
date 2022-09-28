
const initialState = {
    notes:[
        {
            id: '010101',
            title: 'Nota 1',
            details: 'Exemplo de descrição de notas'
        },
        {
            id: '020202',
            title: 'Nota 1',
            details: 'Exemplo de descrição de notas'
        }, 
        {
            id: '010103',
            title: 'Nota 1',
            details: 'Exemplo de descrição de notas'
        },
    ],
    name: 'Phillipe'  
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return{
                ...state,
                notes: [...state.notes, action.notes]
            }
        case 'REMOVE_NOTE':
            return{
                ...state,
                notes: state.notes.filter(note => note !== action.note),
            }
        case 'GET_NOTE':
            return{
                ...state,
            }
        default: return state;    
    }
}
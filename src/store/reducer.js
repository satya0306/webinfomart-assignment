import * as actionType from './actions';

const initailState ={
    filterText: "",
    merchants:[
        {
            id: 1,
            name: 'Max',
            description: 'sports goods',
            quantity: 10,
            price: 500
        },
        {
            id: 2,
            name: 'Miller',
            description: 'electronics goods',
            quantity: 20,
            price: 600
        },
        {
            id: 3,
            name: 'Mullar',
            description: 'motor goods',
            quantity: 30,
            price: 700
        }    
    ]
}

const reducer = (state = initailState, action) =>{
    switch (action.type) {
        case actionType.ADD_TABLE:
            return{
                ...state,
                merchants:{
                    ...state.merchants, 
                
                 }
            };
        case actionType.REMOVE_TABLE:
            return{
                ...state,
                merchants:{
                    ...state.merchants
                }
            };
        default:  
            return state;
    }
    
};

export default reducer;
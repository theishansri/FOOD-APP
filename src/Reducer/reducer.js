
const initialState={
    prices:{},
    quantity:{},
    items:[],
    count:0
}
const change=(state=initialState,action)=>{
    switch(action.type){
        case "DISPLAY":
            return{
                ...state,
                prices:{...action.prices},
                quantity:{...action.quantity},
                items:[...action.itemname]

            }
            case "INCREMENT":
                return{
                    ...state,
                    quantity:{
                        ...state.quantity,
                        [action.itemname]:state.quantity[action.itemname]+1
                    },
                    count:state.count+1
                }
            case "DECREMENT":
                return{
                    ...state,
                    quantity:{
                        ...state.quantity,
                        [action.itemname]:state.quantity[action.itemname]-1
                    },
                    count:state.count-1
                }
        default:
            return state
    }
                
}
export default change;
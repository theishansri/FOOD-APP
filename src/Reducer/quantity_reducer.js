

// const initialState={
//     quantity:{}
// }


// const change_quantity=(state=initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             console.log('st',state,action)
//                 return{
//                     ...action.state,
//                     quantity:{
//                         ...action.state.quantity,
//                         [action.itemname]:action.state.quantity[action.itemname]+1
//                     }
//                 }
//         case "DECREMENT":
//                 return{
//                     ...state,
//                     quantity:{
//                         ...state.quantity,
//                         [action.payload]:state.quantity[action.payload]-1
//                     }
//                 }
//         default:
//             return state;
//     }
// }
// export default change_quantity;
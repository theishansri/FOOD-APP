import axios from 'axios';

export const fetch_food=()=>{
    return async(dispatch,getState)=>{
        let x=await axios.get('https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json');
        let y=[...x.data]
        let prices={}
        let itemname=[]
        let quantity={}
        for(let i=0;i<y.length;i++){
            prices[y[i].itemname]=y[i].price
            itemname.push(y[i].itemname)
            quantity[y[i].itemname]=0
        }
        return dispatch({type:'DISPLAY',prices,itemname,quantity})
    }
    

}
export const increment_food=(itemname)=>{
    return(dispatch)=>{
        return dispatch({type:'INCREMENT',itemname})
    }
    
}
export const decrement_food=(itemname)=>{
    return(dispatch)=>{
        return dispatch({type:'DECREMENT',itemname})
    }
    
}
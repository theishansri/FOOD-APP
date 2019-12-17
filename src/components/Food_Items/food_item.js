import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increment_food,decrement_food} from "../../actions/actions";
 class food_item extends Component {

    handlePlus=(itemname)=>{
        console.log("IyEM",itemname)
        return this.props.increment(itemname)
    }
    handleMinus=(itemname)=>{
        return this.props.decrement(itemname)
    }
    
    // shouldComponentUpdate()
    render() {
        const{items}=this.props
        return (
            <div style={{marginLeft:'120px',marginRight:'0px'}} className="row center">
                 { items && (items).map((obj,index)=>{
                    return(
                        <span key={index} className="card col-sm-5 shadow p-3 mb-5 bg-white rounded " style={{marginTop:'32px',marginLeft:'12px',height:'220px'}}>
                            <span className="card-body">
                                <h2 className="card-title" style={{marginTop:'-1px'}}><b>{obj}</b><span className="right"><i className="fa fa-inr" style={{fontSize:'21px'}}></i>{this.props.prices[obj]}</span></h2>
                                <p className="card-text">Increase or decrease the quantity</p>
                                <div className="card-footer">
                                <button type="button"    onClick={()=>this.handlePlus(obj)} className="btn btn-primary">+</button> {this.props.quantity[obj]}&nbsp;
                                <button  disabled={this.props.quantity[obj]?false:true} type="button" onClick={()=>this.handleMinus(obj)} className="btn btn-danger" style={{backgroundColor:'maroon'}}>-</button>
                                </div>
                            </span>
                        </span>
                    )
                })} 
                </div>
        )
    }
}

const mapStateToProps= (state)=>{
    // let x= state.dict
    console.log("gg",state)
    return{
        prices:state.fetch.prices,
        quantity:state.fetch.quantity,
        items:state.fetch.items
    }
}
const mapDispatchToProps=(dispatch)=>{
    console.log("dis",dispatch)
    return{
        increment:(itemname)=>dispatch(increment_food(itemname)),
        decrement:(itemname)=>dispatch(decrement_food(itemname))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(food_item);

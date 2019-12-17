import React, { Component } from 'react'
import Food from "../Food_Items/food_item";
import {Link} from 'react-router-dom';
import Modals from "../Modal/Modals";
import {connect} from 'react-redux';
import { fetch_food } from '../../actions/actions';
export class layout extends Component {
    p=()=>{
        
    }
    
    componentWillMount(){
        this.props.food_items();
    }
    
    render() {
        return (
            <div>
                
                <nav className="nav-wraper orange lighten-1">
                    <ul>
                    <li>
                    <div className="md-form mt-0">
                        <input style={{marginLeft:'353px',width:'492px'}} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </div>
                    </li>
                    <li style={{marginRight:'30px'}}className="right"><Link to="/cart" className="waves-effect waves-light btn">Go To Cart</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    
                <center><button disabled={this.props.checkout===0?true:false} onClick={()=>{this.setState({show:true})}} style={{marginTop:'33px',width:'224px'}} data-target="modal1" className="btn waves-effect waves-light" name="action">Checkout</button></center>
                
                    {/* <Food style={{marginTop:'-1px'}} /> */}
                    <Food />
                </div>
                <Modals on  Click={this.p} />
                {/* <Modals onClick={this.p} open={this.state.show}/>  */}
            </div>
            
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        checkout:state.fetch.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        food_items:()=>dispatch(fetch_food())
        // onIncrement:()=>dispatch({})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(layout)

import React from 'react';
import './App.css';
class Nav extends React.Component{
    styles = {
        fontStyle :"bold",
        color :"teal"
    };

    render(){

        return (
            <div className  = 'Appe'>
                <h1 style = {this.styles}></h1>
            </div>
        
        );
    } 
}
    export default Nav;
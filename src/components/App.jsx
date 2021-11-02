import React, { Component } from "react";
import './App.css'
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props){
        super(props)
        this.books = [
            {title: "Green Light, Red Light", author: "Demecian Newman"},
            {title: "My TV and My Game", author: "Kenneth Newman Jr"},
            {title: "I Love COD", author: "Jourdain watkins"}
        ];
        this.state = {
            bookNumber: 1
        };
    }
    
    render(){
        return(
           <div className="container-fluid">
               <TitleBar/>
               <div className="row">
                    <div className="col-md-4">
                        {/**Button here to move to previous book being viewed*/}
                    </div>
                    <div className="col-md-4">
                        {/**Dislpay book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/**Button here to move to next book being viewed*/}
                    </div>  
               </div>
           </div>
        )
    }   
}

export default App;
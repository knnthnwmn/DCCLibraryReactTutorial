import React, { Component } from "react";
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import BookCreator from "./BookCreator/BookCreator";


class App extends Component {
    constructor(props){
        super(props)
        this.books = [
            {title: "Green Light, Red Light", author: "Demecian Newman"},
            {title: "My TV and My Game", author: "Kenneth Newman Jr"},
            {title: "I Love COD", author: "Jourdain watkins"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
    
    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    createBook = (newBook) => {
        console.log('From createBook on App component', newBook);
        this.books.push(newBook);
    }

    render(){
        return(
           <div className="container-fluid">
               <TitleBar/>
               <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>
               <BookCreator createNewBook={this.createBook}/>
           </div>
        )
    }   
}

export default App;
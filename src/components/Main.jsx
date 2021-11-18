import React from 'react';
import { useState, useEffect } from "react";
import Genres from './Genres';
import SideContent from './SideContent';


function Main() {
    const [books, setBooks] = useState([])
    
    useEffect(() => {

        const bookData = async () => {
            let response = await fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json")

            let data = await response.json();

            setBooks(data)
        }

        bookData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    useEffect(() => {
        console.log(books);
    });

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-10 row">
                <div className="col-12 col-md-8">
                    <Genres books={books}/>
                    {/* Side bar goes here */}
                    
                </div>
                <div className="col-12 col-md-4">
                    <SideContent books={books}/>
                </div>
            </div>
                
        </div>
    )
}

export default Main

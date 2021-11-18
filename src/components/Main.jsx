import React from 'react';
import Genres from './Genres';
import SideContent from './SideContent';


function Main(props) {
    let books = props.books

    function getLanguagesArray() {
        let languagesArray = [];

        books.forEach((bookObj) => {
            if (!languagesArray.includes(bookObj.language)) {
                languagesArray.push(bookObj.language)
            }
        })
        return languagesArray
    }

    console.log(getLanguagesArray());

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-10 row">
                <div className="col-12 col-md-8">
                    <Genres books={books} languagesArray={getLanguagesArray()}/>
                    
                </div>
                <div className="col-12 col-md-4">
                    <SideContent languagesArray={getLanguagesArray()}/>
                </div>
            </div>
                
        </div>
    )
}

export default Main

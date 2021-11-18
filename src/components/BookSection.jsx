// import { useState, useEffect } from "react";
import BookCard from './BookCard'

function BookSection(props) {
    let {bookArray, title, linkName} = props;

    // console.log(bookArray);
    let firstSixBooks = bookArray.slice(0, 6)
    
    return (
        <>
            <div className = "container">
                <h5 className="mt-3">{title}</h5>
                <hr></hr>
                <div className="row">

                    {firstSixBooks.map((obj, index) => {
                        return (
                            <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={index}>
                                <BookCard title = {obj.title} author = {obj.author} imgURL = {obj.imageLink} link={obj.link}/>
                            </div>
                        )
                    })}
                </div>
                <div className="text-end">
                    <a href="#more books">More {linkName}</a>
                </div>
            </div>
        </>
    )
}

export default BookSection;

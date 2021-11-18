import React from 'react'

function SideContent(props) {
    let books = props.books;


    function getLanguagesArray() {
        let languagesArray = [];

        books.forEach((bookObj) => {
            if (!languagesArray.includes(bookObj.language)) {
                languagesArray.push(bookObj.language)
            }
        })
        return languagesArray
    }
    

    // console.log(getLanguagesArray());
    
    return (
        <>
            <div className="mt-5 col-12">
                <img width="100%" src="booksWithWindow_Cropped.jpeg" alt="" />
            </div>

            <div className="mt-5 col-12 ">
                <h3>Browse</h3>
                <hr />
                <div className="ms-2 row">
                    {getLanguagesArray().map((language, index) => {
                        return (
                            <span className="col-12 col-md-6 mt-2 mb-2"><a href="#/">{language}</a></span>
                        )
                    })}
                </div>
            </div>
        </>
        
    )
}

export default SideContent;

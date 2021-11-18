import React from 'react'

function SideContent(props) {
    let languages = props.languagesArray
    
    return (
        <>
            <div className="mt-5 col-12">
                <img width="100%" src="booksWithWindow_Cropped.jpeg" alt="" />
            </div>

            <div className="mt-5 col-12 ">
                <h3>Browse Books by Language</h3>
                <hr />
                <div className="ms-2 row">
                    {languages.sort().map((language, index) => {
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

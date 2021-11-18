import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import BookSection from './BookSection'

function Genres() {
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
        
        <div className="col-12">
            <h3 className="mt-5">Genres</h3>
            <div className="container">
                <Form className="bg-light ps-2 pt-2 pb-2 pe-5">
                        <Form.Group>
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className=""
                            aria-label="Search for Author"
                            />
                        </Form.Group>
                        <Button className="mt-2" variant="outline-primary">Find Author</Button>
                </Form>
            </div>
            {/* End of Search Section */}

            <BookSection bookArray={books} title="100 Best Books of All Time" linkName="top 100 books"/>

            <BookSection bookArray={books.filter(book => book.language === "English")} title="English Books" linkName="English books"/>
            
            <BookSection bookArray={books.filter(book => book.language === "French")} title="French Books" linkName="French books"/>

            <BookSection bookArray={books.filter(book => book.language === "Italian")} title="Italian Books" linkName="Italian books"/>

            <BookSection bookArray={books.filter(book => book.language === "Spanish")} title="Spanish Books" linkName="Spanish books"/>

            <BookSection bookArray={books.filter(book => book.language === "German")} title="German Books" linkName="German books"/>

            <BookSection bookArray={books.filter(book => book.language === "Russian")} title="Russian Books" linkName="Russian books"/>

            <BookSection bookArray={books.filter(book => book.language === "Greek")} title="Greek Books" linkName="Greek books"/>

            <BookSection bookArray={books.filter(book => book.language === "Norwegian")} title="Norwegian Books" linkName="Norwegian books"/>

        </div>
    )
}

export default Genres;

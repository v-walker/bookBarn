
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from "react";
import BarnNav from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
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
    <div className="row m-0 p-0">
      <BarnNav name="BookBarn" link1="Home" link2="MyBooks" link3="Browse" link4 ="Community" link5="Sign In" link6="Join"/>
      <Header />
      <Main books={books} />
    </div>
  );
}

export default App;

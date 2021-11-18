
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarnNav from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <BarnNav name="BookBarn" link1="Home" link2="MyBooks" link3="Browse" link4 ="Community" link5="Sign In" link6="Join"/>
      <Header />
      <Main />
    </>
  );
}

export default App;
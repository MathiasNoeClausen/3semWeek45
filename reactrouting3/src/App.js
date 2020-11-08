import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
  
} from "react-router-dom";

const Content = (props) => {
  return(
      <div>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade}/>
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
          </Route>
          <Route path="/find-book">
            <FindBook bookFacade={props.bookFacade} />
          </Route>
          <Route>
            <NoMatch/>
          </Route>
      </Switch>
      </div>
    </div>
  )
}

const Header = () => {
  return(
      <>
       <ul className="header">
        <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>

        </li>
        <li>
          <NavLink activeClassName="active" to="/products">Products</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="active" to="/add-book">Add book</NavLink>

        </li>
        <li>
          <NavLink activeClassName="active" to="/find-book">Find book</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/company">Company</NavLink>
        </li>
      </ul>

      <hr />
      </>
  );
}

function App(props) {
  return (
    <Router>
    
    <Header/>
    <Content bookFacade={props.bookFacade}/>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function AddBook(props) {

  function handleSubmit(evt) {
    evt.preventDefault();
    let book = {title: evt.target.title.value, info: evt.target.info.value}
    console.log(book);
    props.bookFacade.addBook(book);
  }

  return (
    <div>
      
      <h2>Add book</h2>
    <form onSubmit={handleSubmit}>
      <input type ="text" id="title" placeholder="add title"></input><br></br>
      <input type ="text" id="info" placeholder="add info"></input><br></br>
      <input type ="submit" value="Save" ></input><br></br>
    </form>

    </div>
    
  );
}
function Product(props) {
  console.log(props.value)
  return <li>{props.value}</li>
}

function Products(props) {
  const books = props.bookFacade.getBooks();
  console.log(books);
  const listBooks = books.map((book) =>
  <Product key={book.id} value={book.title}/>
 );
 
  return (
    
    <div>
      <p>Antal bøger: {props.bookFacade.getBooks().length}</p>
      <ul> {listBooks} </ul>
    </div>
  );
}

function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  );
}
function FindBook(props) {
  const [book, setBook] = useState(0);

  function handleChange(evt) {
    evt.preventDefault();
    const target = evt.target;
    var value = target.value;

    setBook({id: value})


    
;
    
    console.log(value); 
    console.log(book) 
    
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setBook(props.bookFacade.findBook(book.id))


    
   
  }

  function handleDelete(evt) {

    evt.preventDefault();

    const target = evt.target;
      var value = target.value;

    setBook(props.bookFacade.deleteBook(book.id));
  }

  return(
    <div>
      <h2>Find Book</h2>
      <form onSubmit={handleSubmit}>
      <input name="id" type ="number" placeholder="Enter book id" onChange={handleChange}></input><br></br>
      <input type ="submit" value="Find book" ></input>
      
      </form>
      <p>Book id: {book.id}</p>
      <p>Book tilte: {book.title}</p>
      <p>Book info: {book.info}</p>


      <h2>Delete Book</h2>
        
      <input type="button" onClick={handleDelete} value="Delete book"/><br></br>  
      <button onClick={handleDelete} >Delete</button>
      <p>Book with ID: {book.id} was deleted</p>



     


    </div>
  )
}

const NoMatch = () => {
  let location = useLocation();
  return(
    <div>
      <h3>
        No match for location  <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default App;

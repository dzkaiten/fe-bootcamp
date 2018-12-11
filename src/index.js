import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

// const About = (props) => <div>
//     <h1>About {props.test}</h1>;
//     {props.children()}
// </div>

// match and history are props from Router API
const About = ({ match, history }) => <>
    <h1>About: {match.params.id}</h1>
    <button onClick={() => history.push('/')}>Home</button>
</>;

const Contact = () => <h1>Contact</h1>

const App = () => {

 return <>
   <header>Header</header>
   <nav>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about/2">About</Link></li>
       <li><Link to="/contact">Contact</Link></li>
     </ul>
   </nav>
   <main>
     <Route path="/" exact component={Home} />
     <Route path="/about/:id" component={About} />
     <Route path="/contact" component={Contact} />

   </main>
   <footer>Footer</footer>
</>
}

//<Route path="/about" render={() => <About test="2">{() => <h2>Cool</h2>}</About>} />

ReactDOM.render(<Router>
    <App />
</Router>, document.querySelector('#root'));
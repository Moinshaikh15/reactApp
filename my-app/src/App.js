// import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import users from './user';
import UserCard from './components/UserCard';

function App() {
  //let name = 'moin'
  //let morning = () => 'Good Morning!'

  return (
    <div className='container'>
      <h1>User at Amce Inc</h1> 
      <div className='card-container'>
      {users.map(user =><UserCard user={user} />)}
      </div>
      
      
    </div>
  );
}

export default App;

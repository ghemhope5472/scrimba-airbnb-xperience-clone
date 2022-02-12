
import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Data from './Data'



function App() {

  const newData = Data.map( (data) => {
   return(
    <Card 
    key={data.id}
    {...data}
    />
   )
  })


  return (
    <>
      <Navbar />
      <Hero />
        <div className='card-container'>
        {newData}
        {newData}
      </div>
      
    </>
  );
}

export default App;

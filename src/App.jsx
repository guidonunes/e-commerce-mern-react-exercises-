import Hero from './components/Hero';



const App = () => {

  const itemObj = {
    id: 1,
    name: 'Biscuit',
    flavor: 'Sweet',
  }


  return (
    <div>
      <Hero item = {itemObj} />
    </div>
  );
};

export default App;

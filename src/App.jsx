import Hero from './components/Hero';



const App = () => {

  const BtnFunction = () => {
    alert('Hello World');
  }


  return (
    <div>
      <Hero item = {BtnFunction} />
    </div>
  );
};

export default App;

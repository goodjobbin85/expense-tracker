import Item from './components/Item' 

function App() { 
  
  return ( 
    <div> 
      <h1>Welcome to Expense Tracker!</h1> 
      <Item expense="Amazon Fresh" amount="95.76" date="2-11-22" /> 
      <Item expense="Google" amount="10.00" date="2-10-22" />  
      <Item expense="McDonald's" amount="30.76" date="2-11-22" />
    </div>
  );
}

export default App;

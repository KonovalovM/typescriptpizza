// import React from 'react';
import React, { FC, useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PizzaPage from './pages/PizzaPage';
// import AddPizzaForm from './components/AddPizzaForm';
// import DisplayPizzas from './components/DisplayPizzas';
// import Pizza from './models/Pizza';
import './App.css';
// import { type } from 'os';

// let pizza: string = 'Salami';

// let price: number = 20;

// let atStock: boolean = true;

// let pizzas: string[] = ['Salami', 'Sousagge'];

// let numbers: number[] = [1,2,3];

// type Order = {
//   title: string,
//   quantity?: number
// }

// const order: Order = {title: 'Margarita', quantity: 20};

// const orders: Order[] = [
//   {title: 'Margarita'},
//   {title: 'Salami', quantity: 10},
// ]

// type X = {
//   a: string,
//   b: number
// }
// let Y = X & {
//   c: string,
//   d: number
// }
// let y: Y = {
//   c: 'test',
//   d: 5,
//   a: 'one',
//   b: 10
// }

// interface Auto {
//   country: string
// }
// interface BMW extends Auto {
//   model: string,
//   year: number
// };
// const bmw: BMW = {
//   model: '5',
//   year: 2023,
//   country: 'Ukraine'
// }

const App: FC = () => {
  // const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  // const addPizza = (newPizza: Pizza) => {

  //   const newPizzasList = [...pizzasList, newPizza];
  //   setPizzasList([...pizzasList, newPizza])
  //   localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))  
  // }

  // const updatePizza = (newPizza: Pizza) => {
    
  //   const newPizzasList = pizzasList.map((pizza)=>(pizza.id === newPizza.id ? newPizza : pizza)); 
  //   setPizzasList(newPizzasList);
  //   localStorage.setItem('pizzasState', JSON.stringify(newPizzasList));
  // }

  // const deletePizza = (id: number) => {
  //   const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
  //   setPizzasList(newPizzasList);

  //   localStorage.setItem('pizzasState', JSON.stringify(newPizzasList));
  // }

  // useEffect(() => {
  //   const pizzasState = localStorage.getItem('pizzasState');
  //   if (pizzasState) {
  //     setPizzasList (JSON.parse(pizzasState));
  //   }

  // }, []);

  // console.log ('pizzaSlist', pizzasList);

  return (
    <div className="App">
      <div className='wrap'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/pizza/:id' element={<PizzaPage />} />
        </Routes>
        {/* <span className='heading'>Pizza</span>
        <AddPizzaForm
          addPizza={addPizza}
        />
        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        /> */}


      </div>
    </div>
  );
}

export default App;
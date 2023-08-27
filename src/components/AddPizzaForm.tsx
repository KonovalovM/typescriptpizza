import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import Pizza from '../models/Pizza';
import './styles.css';

interface AddPizzaFormProps{
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const[newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log('handle change >>', e.target);
        const {name, value} = e.target;
        // console.log('name >>>', name);
        // console.log('value >>>', value);
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    console.log('newpizza > ',newPizza);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log('handle change >>', e.target);
        const {title, price, img} = newPizza;

        if(title && price && img) {
            addPizza ({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewPizza(initState);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='title' 
                placeholder='Назва'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input 
                type="text" 
                name='price' 
                placeholder='Вартість'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name='img'
                type='text'
                placeholder='Фото'
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type='submit'>
                + Додати в меню
            </button>
        </form>
    )
}

export default AddPizzaForm;
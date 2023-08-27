import React, { FC, ChangeEvent, FormEvent, useState, } from 'react';
import Pizza from '../models/Pizza';
import './styles.css';



interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void;
}

const EditPizzaForm: FC <EditPizzaFormProps>= ({data, updatePizza, handleToggleEdit}) => {
    const [editPizza, setEditPizza] =
        useState<Pizza>(data);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {  
        const { name, value } = e.target;

        setEditPizza({
            ...editPizza,
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log('handle change >>', e.target) 
        e.preventDefault();

        const { title, price, img } = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    }

    console.log('editPizza', editPizza)
    return (
        <form 
        className='edit-form'
        onSubmit={handleSubmit}>
            <input
                name='title'
                type='text'
                placeholder='Назва'
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name='price'
                type='text'
                placeholder='Вартість'
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name='img'
                type='text'
                placeholder='Фото'
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type='submit'>
                підтвердити   
            </button>

        </form>
    )

}

export default EditPizzaForm;
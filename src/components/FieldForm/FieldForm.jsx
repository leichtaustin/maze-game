import React, { useState } from 'react';

export function FieldForm(props) {
    const [formInput, setFormInput] = useState({height: 3, width: 3, percentage: 2});

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormInput((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fieldParams = {
            height: formInput.height,
            width: formInput.width,
            percentage: formInput.percentage
        };
        if(fieldParams) {
            props.setField(fieldParams);
        }
        setFormInput({height: 3, width: 3, percentage: 2})

    }

    return (
        <div className='formDiv'>
            <form className='FieldForm' onSubmit={handleSubmit}>
                <label for='height'>Height: </label>
                <input 
                    type='number'
                    id='height'
                    name='height'
                    aria-label='Input for Height'
                    placeholder='Input Height Here'
                    value={formInput.height}
                    onChange={handleFormChange}
                    min={3}
                    max={12}
                /> 
                <br />
                <label for='width'>Width: </label>
                <input 
                    type='number'
                    id='width'
                    name='width'
                    aria-label='Input for Width'
                    placeholder='Input Width Here'
                    value={formInput.width}
                    onChange={handleFormChange}
                    min={3}
                    max={12}
                />
                <br />
                <label for='percentage'>Percentage: </label>
                <input 
                    type='number'
                    id='percentage'
                    name='percentage'
                    aria-label='Input for Percentage'
                    placeholder='Input Percentage Here'
                    value={formInput.percentage}
                    onChange={handleFormChange}
                    min={1}
                    max={10}
                />
                <br />
                <button type='submit'>Submit Values</button>             
            </form>
        </div>
    )
}
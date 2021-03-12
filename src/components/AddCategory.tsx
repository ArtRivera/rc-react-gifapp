import React,{ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from 'react';

interface Props{
    setCategory: Dispatch<SetStateAction<string[]>>
}

const AddCategory = ({setCategory}: Props) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategory(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory

import React,{ChangeEvent, FormEvent, useState,useEffect} from 'react';

interface Props{
    setCategory: any
}

const AddCategory = ({setCategory}: Props) => {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategory((cats:any) => [inputValue,...cats]);
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

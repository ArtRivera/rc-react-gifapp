import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}: {defaultCategories?: string[]}) => {

    const [category, setCategory] = useState(defaultCategories);

    return (
        <>
            <h2>Arthur's Gif App</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>
                {category.map(categoria => <GifGrid key={categoria} category={categoria}/>)}
            </ol>
        </>
    )
}

export default GifExpertApp

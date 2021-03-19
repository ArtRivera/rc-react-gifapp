interface Props{
    img: Item,
   
}

interface Item{
    title: string,
    url: string
}

const GifGridItems = ({img}: Props) => {

    const  {title="",url=""} = img;
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItems

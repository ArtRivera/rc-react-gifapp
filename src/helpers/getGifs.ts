export const getGifs = async (category: string) =>{
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ju4jVWyfBJnhJM4l1hhufg8rb1yNLBsT`;
    const resp = await fetch(URL);
    const {data} = await resp.json();
    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    })
    return gifs;
}
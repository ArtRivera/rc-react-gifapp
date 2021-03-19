import {getGifs} from '../../helpers/getGifs';


describe('Pruebas con Fetch Gifs', () => {
    test('should traer 10 elementos', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10);
    })

    test('should traer 0 en el arreglo de gifs', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})

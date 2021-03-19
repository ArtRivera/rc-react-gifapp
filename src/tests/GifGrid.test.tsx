 import './setupTests';
 import { shallow } from 'enzyme'
 import GifGrid from '../components/GifGrid';
 import {useFetchGifs} from '../hooks/useFetchGifs';
 jest.mock('../hooks/useFetchGifs');
 
 describe('Pruebas de <GifGrid />', () => {

    const category = 'Naruto';

     test('should match to snapshot', () => {
         const wrapper = shallow(<GifGrid category={category}/>)
         expect(wrapper).toMatchSnapshot();
     })

     test('should mostrar items cuando se cargan de useFetchGifs', () => {
         const gifs =[{
            id: 'fvsvfv',
            title: 'sfdvvdvdf',
            url: 'dfvdfvsdvdsdf'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItems').length).toBe(gifs.length);
        
     })
     
     
 })
 
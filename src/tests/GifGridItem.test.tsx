import './setupTests';
import { shallow, ShallowWrapper } from 'enzyme';
import GifGridItems from '../components/GifGridItem'

describe('Pruebas de GifGridItem', () => {
    let wrapper: ShallowWrapper;
    const title = 'Prueba';
    const url = 'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png';

    // Se ejecuta antes de cada prueba
    beforeEach(()=>{
        wrapper = shallow(<GifGridItems img={{url,title}} />);
    })

    test('Debe mostrar Counter App correctamente', () => {    
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener el titulo pasando', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    });

    test('should tener la imagen igual al url y alt de los props', () => {
        const image = wrapper.find('img');
        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);
    });

    test('should tener animate__bounce', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__bounce')).toBe(true);
    })
    
    
    
})

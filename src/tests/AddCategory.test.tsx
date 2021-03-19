import './setupTests';
import { shallow, ShallowWrapper } from 'enzyme'
import AddCategory from '../components/AddCategory'

describe('Prueba de AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper: ShallowWrapper;

    beforeEach(() =>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory  setCategory={setCategories}/>);
    })

    test('should mostrarse bien', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should csmbiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ target: { value}});
    });

    test('No debe de postear el onSubmit', () => {
        const form = wrapper.find('form');
        form.simulate('submit',{
             preventDefault(){}
    });
    expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Testyyyy'
        wrapper.find('input').simulate('change', {
            target: {value} 
         });
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
})

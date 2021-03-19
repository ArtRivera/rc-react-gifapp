import './setupTests';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpert App Tests', () => {

    test('should match to snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('should mostrar una lista de categorias', () => {
        const categories = ['Dragon', 'WandaVision'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
    
})

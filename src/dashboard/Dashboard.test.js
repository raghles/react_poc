import React from 'react';
import Dashboard from './Dashboard';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

describe('Testing Dashboard Component', () => {

    let store, container, wrapper
    const mockStore = configureStore()
    beforeEach(()=>{
        store = mockStore({})
        container = shallow(<Router><Dashboard store={store} /></Router>)
        wrapper = mount(<Provider store={store}><Router><Dashboard /></Router></Provider>)
    })

    it('should render correctly', () => {
        expect(container.length).toEqual(1)
    });
  
    it('Should have greet-text', () => {
        expect(wrapper.find('span').prop('className')).toEqual("greet-text")
    });

});

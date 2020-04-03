import React from 'react';
import Register from './Register';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

describe('Testing Register Component', () => {

    let store, container, wrapper
    const mockStore = configureStore()
    beforeEach(()=>{
        store = mockStore({userName: "Corona"})
        container = shallow(<Register store={store} />)
        wrapper = mount(<Provider store={store}> <Router><Register /></Router></Provider>)
    })

    it('Should render correctly', () => {
        expect(container.length).toEqual(1)
    });

    it('Should have Name', () => {
        expect(wrapper.find('#userName').prop('aria-label')).toEqual("name")
    });

    it('Should have Email', () => {
        expect(wrapper.find('#email').prop('type')).toEqual("email")
    });

    it('Should have Address', () => {
        expect(wrapper.find('#address').prop('aria-label')).toEqual("address")
    });

});

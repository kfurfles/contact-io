import React from 'react';
import { render } from '@testing-library/react';

import App from './index';
import Header from "../../components/Header";
import Contacts from "../Contacts";


describe('App', () => {
    it('Should render App', () => {
        const { fragment } = render(
            <App>
                <Header />
                <Contacts />
            </App>);
        expect(fragment).toMatchSnapshot();
    });

});
import React from 'react';
import { render,  } from '@testing-library/react';

import Input from './index';
import Button from "../Button";

describe('Button', () => {
    it('Should render Input', () => {
        const { fragment } = render(<Input/>);
        expect(fragment).toMatchSnapshot();
    });

    it('should pass disabled prop to Input', () =>{
        const fragment = render(<Input disabled={true}/>);
        expect(fragment).toMatchSnapshot();
    })

    it('should pass class to to Input', () =>{
        const { container } = render(<Input className='custom-class'/>);

        expect(container.querySelector('.custom-class')).toBeTruthy()
    })
});
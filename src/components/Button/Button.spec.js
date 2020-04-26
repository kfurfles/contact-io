import React from 'react';
import { render} from '@testing-library/react';

import Button from './index';

const mockButtonProps = {
    selected: true,

};

describe('Button', () => {
    it('Should render Button', () => {
        const { fragment } = render(<Button/>);
        expect(fragment).toMatchSnapshot();
    });

    it('Should render selected button', () =>{
        const fragment = render(<Button selected={true}>text-button</Button>);

        const classIndex = fragment.getByText('text-button').className.indexOf('is-selected')
        expect(classIndex > -1).toBe(true)
    })

    it('Should render selected with ascend options order button', () =>{
        const fragment = render(<Button selected={true}  direction={'up'}>text-button</Button>);

        const upIndex = fragment.getByText('text-button').className.indexOf('is-up')
        expect(upIndex > -1).toBe(true)
    })

    it('Should render selected with ascend options order button', () =>{
        const fragment = render(<Button selected={true}  direction={'down'}>text-button</Button>);

        const downIndex = fragment.getByText('text-button').className.indexOf('is-down')
        expect(downIndex > -1).toBe(true)
    })
});
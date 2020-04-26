import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import FilterBar from './index';

const mockUserData = {
	avatar: '',
	name: '',
	phone: '',
	country: '',
	admissionDate: '',
	company: '',
	department: '',
};

describe('FilterBar', () => {
	it('Should render FilterBar', () => {
		const { fragment } = render(<FilterBar onChangeSort={() => {}} onChangeFilter={() => {}} />);

		expect(fragment).toMatchSnapshot();
	});

	it('Should dispatch {setActiveFilter}', () => {
		const handleChangeSort = (a) => {
			expect()
		}
		const handleChangeFilter = (e) => {
			console.log({ e })
		}
		const filterBar = render(<FilterBar onChangeSort={handleChangeSort} onChangeFilter={handleChangeFilter} />);
		filterBar.getByText('Nome').click()
	})
});
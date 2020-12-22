import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { reducers } from './store';
import { createStore } from 'redux';
import { SWRConfig } from 'swr';

export const renderPage = (component: React.ReactElement) => {
	const store = createStore(reducers);
	const container = render(
		<Provider store={store}>
			{
				// tslint:disable-next-line: no-any
				<SWRConfig value={{ dedupingInterval: 0, errorRetryInterval: 500 }}>{component}</SWRConfig>
			}
		</Provider>,
	);
	return { container, store };
};

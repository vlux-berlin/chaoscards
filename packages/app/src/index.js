import {App} from './app.js';
import GlobalStyles from './lib/styles.js';
import theme from './lib/theme.js';
import reportWebVitals from './report-web-vitals.js';
import {MantineProvider} from '@mantine/core';
import process from 'process';
import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(
	<StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
			<GlobalStyles />
			<App />
		</MantineProvider>
	</StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === 'development') {
	reportWebVitals(console.log);
}

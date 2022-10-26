import { inWeb } from '@src/common/helpers';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
	return <div style={{ color: 'red' }}>{inWeb() ? 'Hello Web!' : 'Hello Electron!'}</div>;
};

export { App };

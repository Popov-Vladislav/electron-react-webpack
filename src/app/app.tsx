import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';

const App = (): ReactElement => <div className="hello">Hello React!</div>;
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(<App />);

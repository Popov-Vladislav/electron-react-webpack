import { App } from '@src/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Application to Render
const app = <App />;

// Render application in DOM
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(app);

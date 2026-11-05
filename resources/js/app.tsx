import '../css/app.css';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import Home from './Pages/Home';
createInertiaApp({resolve: name => { if (name !== 'Home') throw new Error('Unknown page'); return Home; }, setup({el, App, props}) {createRoot(el).render(<App {...props}/>);}});

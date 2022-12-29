import React from 'react';
import { createRoot } from 'react-dom/client';
import Movie from './Movie';

      
const root = document.getElementById('root');

createRoot(root).render(
    <React.StrictMode>
           <Movie />
    </React.StrictMode>
);

// ReactDOM.render(
//     
// )
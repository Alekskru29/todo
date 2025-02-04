import { React } from 'react';
import { createRoot } from 'react-dom/client';

import TodoApp from './components/todo-app';

createRoot(document.getElementById('root')).render(<TodoApp />);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('React foo Suite', function () {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('see if true is true', () => {
        expect(true).toBe(true);
    });
});
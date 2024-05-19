import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';

function App() {
    return (
        <div>
            <Header />
            <div id="root">
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;

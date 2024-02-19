import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'
import Card from './Card.jsx'

function App() {
    return(
        <>
        <Header/>
        <Projects/>
        <Card/>
        <Card/>
        <Card/>
        <Footer/>
        </>
    );
}

export default App


// 1.  Nav using react router, dynamic rendering or another third party
// 2. Render header & nav bar across all pages (Home, Projects, Contact)
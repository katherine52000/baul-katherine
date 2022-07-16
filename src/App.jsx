import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./componentes/Header"
import Section from "./componentes/Section"


class App extends React.Component {
    render() {
        return (

            <div className='app'>
                <Router>
                    <Header />
                    <Section />

                </Router>
                holaa reaxct
            </div>
        );
    }
}

export default App
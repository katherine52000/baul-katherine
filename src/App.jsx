import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./componentes/Navbar"
import Cards from "./componentes/Cards"


class App extends React.Component{
    render() {
        return (

            <div className='app'>
                <Router>
                    <Navbar/>

                    <Cards
                    titulo='Card title'
                    ImgUrl=''
                    Body= 'loremasdfghjkl'

                    />

                </Router>
               
            </div>
        );
    }
}

export default App
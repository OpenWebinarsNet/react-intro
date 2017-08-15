import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorldComponent from './components/HelloWorldComponent'
import ClickBtn from './components/ClickBtn'

class Application extends React.Component {
    render() {
        return(
            <div className="container">
                <HelloWorldComponent />
                <ClickBtn />
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('root'))
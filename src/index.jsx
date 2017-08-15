import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorldComponent from './components/HelloWorldComponent'

class Application extends React.Component {
    render() {
        return(
            <HelloWorldComponent />
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('root'))
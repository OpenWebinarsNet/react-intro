import React, {Component} from 'react'

class ClickBtn extends Component {
	constructor(props) {
    	super(props) // Necesario si ponemos constructor para no sobreescribirlas
    	this.state = {
        	clickOnBtn: false
        }
        
        this.click = this.click.bind(this) // Nos permite llamar en click a el setState
    }
    click(ev) {
    	alert('Hiciste click en el botón')
        this.setState({ clickOnBtn: true })
    }
    render() {
    	return(
        	<button onClick={this.click}>Click me</button>
        )
    }
}

export default ClickBtn
import React from "react";

export class InteractiveWelcome extends React.Component {
state = {
    name: ''
}

    changeinput = (event) =>  {
        const valore = event.target.value
        
        this.setState({
            name: valore
        })
    }

    render() {
        return (
                <div>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.changeinput}
                    />

                    <Welcome nome={this.state.name}/>
                </div>
        )
    }
}

export class Welcome extends React.Component {
    render() {
        return(
            <h1>Welcome, {this.props.nome}</h1>
        )
    }
}
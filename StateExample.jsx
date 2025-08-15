import React, { Component } from "react";

class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            name: "Kunal",
            email: "kunalkhandelwal155@gamil.com"
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
            </>
        )
    }
}

export default StateExample;
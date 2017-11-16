import React from 'react'
import Hello from './hello.jsx'


export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: ''
        }
        this.getData = this.getData.bind(this);
    }
    saveData = (variable, data) => {
        this.setState({
            [variable]: data
        })
    }
    getData = (variable) => {

        let saveData = this.saveData

        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                saveData(variable, this.responseText)
            }
        })

        xhr.open("GET", "http://localhost:8080/" + variable);
        xhr.send(data);
    }
    clickButton = () => {
        this.getData('name');
        this.getData('age');
    }
    render() {
        const user = this.state;
        return (
            <div>
                <Hello name={user.name} age={user.age}/>
                <button onClick={this.clickButton}>Get</button>
            </div>  
        );
    }
}
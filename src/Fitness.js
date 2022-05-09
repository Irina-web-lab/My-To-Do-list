import { Component } from "react";
import check from './gymnast.png';
export class Fitness extends Component {
     
        state = {
        userInput: "",
        Fitness: []
}

        onChangeEvent(e) {
        this.setState({userInput: e})
} 

    addItem(input) {
 if (input === "") {
 alert("Skriv inn et element")
 }
 else {
 let listArray = this.state.Fitness;
    listArray.push(input)
    this.setState({Fitness: listArray, userInput: ''})
}
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
            let listArray = this.state.Fitness;
            listArray.length = 0;
            this.setState({Fitness: listArray})
        }

        onFormSubmit(e) {
            e.preventDefault()
            }

render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div  className="container">
    <div className="inputPlace">
        <input type="text"  placeholder="Skriv ned her hvilke øvelser du skal gjøre i dag..."
        onChange={(e) => this.onChangeEvent(e.target.value)}
        value={this.state.userInput} />

        <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
        </div>
</div>

    <div className="container">
    <ul>
        {this.state.Fitness.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
        <img src={check} width="40px" alt="Gymnast" />
        {item}
    </li>
)) }
    </ul>
    </div>

    <div className="container">
    <button className="delete" onClick={() => this.deleteItem()} >DELETE</button>
    </div>
    </form>
</div>
)
}}

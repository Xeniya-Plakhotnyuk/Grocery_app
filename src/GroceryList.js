import { Component } from "react";
import check from "./check.png";

export class GroceryList extends Component {
  state = {
    userInput: "",
    groceryList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please, type something");
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" });
    }
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="mainField">
          <input
            type="text"
            placeholder="What you want to byu?"
            onChange={(e) => this.onChangeEvent(e.target.value)}
            value={this.state.userInput}
          />
          <button
            onClick={() => this.addItem(this.state.userInput)}
            className="add"
          >
            ADD
          </button>

          <ul>
            {this.state.groceryList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={check} width="35px" alt="check" />
                {item}
              </li>
            ))}
          </ul>
          <button onClick={() => this.deleteItem()} className="del">
            CLEAR ALL
          </button>
        </div>
      </form>
    );
  }
}

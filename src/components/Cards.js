import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Text,
  Separator,
  Input,
  Button,
} from "@smooth-ui/core-sc";
import axios from "axios";
class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
    };
    this.handleChangeF = this.handleChangeF.bind(this);
    this.handleChangeL = this.handleChangeL.bind(this);
  }
  componentDidMount() {
    fetch("https://api.icndb.com/jokes/random/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          jokes: data.value,
          firstName: "",
          lastName: "",
        });
      });
  }

  handleChangeF = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeL = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  fetchFirstandLast = (e) => {
    e.preventDefault();
    fetch(
      `https://api.icndb.com/jokes/random?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(this.state.lastName);
        this.setState({
          jokes: data.value,
        });
      });
  };
  render() {
    {
      console.log(this.state.jokes);
    }
    return (
      <>
        <Card className="card" maxWidth={500}>
          <CardBody>
            <CardTitle>
              <Text variant="h2">Joke:</Text>
            </CardTitle>
            <Text>{this.state.jokes.joke}</Text>
            <Separator />
            <Text>{this.state.jokes.categories}</Text>
          </CardBody>
        </Card>

        <div className="form">
          <Input
            className="first"
            scale="base"
            placeholder="Put in your first name"
            type="text"
            value={this.state.firstName || ""}
            onChange={this.handleChangeF}
          />
          <Input
            className="second"
            scale="base"
            placeholder="put in your last name"
            type="text"
            value={this.state.lastName || ""}
            onChange={this.handleChangeL}
          />
          <Separator />
          <Button className="submit" onClick={this.fetchFirstandLast}>
            Submit
          </Button>
        </div>
      </>
    );
  }
}

export default Cards;

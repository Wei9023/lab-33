import React from "react";
import { connect } from "react-redux";

import * as actions from "./store/actions.js";

import app from "./app.module.scss";
import * as utils from "./lib/utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      person: {}
    };

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    let url = "https://swapi.co/api/people/";
    const data = await utils.get(url);
    const people = data.results;
    this.setState({ people });
  }

  async fetchPerson(url) {
    const person = await utils.get(url);
    this.setState({ person });
  }

  fetchData = async e => {
    e.preventDefault();
    let url = "https://swapi.co/api/people/";
    this.props.get(url);
    this.setState({ person: this.props.api.body.results });
  };

  render() {
    return (
      <>
        <a href="/" onClick={this.fetchPeople}>
          Get The People
        </a>
        <section className={app.people}>
          <ul>
            {this.state.people.map((result, i) => (
              <li onClick={() => this.fetchPerson(result.url)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(this.state.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.state.person[key]}</span>
              </div>
            ))}
          </div>
        </section>
        <a href="#" onClick={this.fetchData}>
          The second one
        </a>
        {this.state.person ? this.state.person.count : "none"}
      </>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: url => dispatch(actions.get(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

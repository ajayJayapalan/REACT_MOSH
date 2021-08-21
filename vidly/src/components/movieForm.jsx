import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import { getGenres } from "../services/genreList";

class MovieForm extends Form {
  state = {
    data: { title: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    numberInStock: Joi.string().required().label("Number In Stock"),
    rate: Joi.string().required().label("Rate"),
  };

  componentDidMount() {
    console.log(getGenres());
    // this.state.genre
  }

  doSubmit = (e) => {
    // call the server
    const errors = this.handleSubmit(e)
    if(!errors) this.props.history.push(`/movies`);
  };

  render() {
    return (
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

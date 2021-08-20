import React, { Component } from 'react'
import Like from './like';

class MoviesTable extends Component {
    render() { 

        const {movies, onDelete, onLike} = this.props;

        return ( <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((i) => {
            return (
              <tr key={i._id}>
                <td>{i.title}</td>
                <td>{i.genre.name}</td>
                <td>{i.numberInStock}</td>
                <td>{i.dailyRentalRate}</td>
                <Like
                  onPress={() => onLike(i)}
                  liked={i.liked}
                  id={i._id}
                />
                <button
                  onClick={() => {
                    onDelete(i._id);
                  }}
                  className="btn btn-danger btn-sm m-3"
                >
                  DELETE
                </button>
              </tr>
            );
          })}
        </tbody>
      </table> );
    }
}
 
export default MoviesTable;
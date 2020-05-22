import React from 'react';
import Joke from './joke';
import axios from 'axios';


const api_url = "https://api.icndb.com/jokes/random";

export default class JokeGenerator extends React.Component {
    state = {
        joke: null,
        loading: null
    };

    loadJoke = async () => {
        this.setState({ loading: true });
        const { data: { value: { joke } } } = await axios.get(api_url);
        this.setState({ loading: false, joke });
    };

    render() {
        const { joke, loading } = this.state;

    return (
    <React.Fragment>
    {!joke && !loading && <div>You have not loaded any joke yet</div>}

    {loading && <div>Loading...</div>}
                
    {joke && !loading && <Joke text={joke} />}

   <button onClick={this.loadJoke} type="button">
    Load a random joke</button>
    
    </React.Fragment>
        )
    }
}
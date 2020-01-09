import createStore from 'unistore';
import axios from 'axios';

const initState = {
    loggedIn: false,
    category: '',
    username: '',
    password: '',
    name: '',
    email: '',
    avatar: '',
    data: '',
    listMovies: []
}

export const store = createStore(initState)

export const actions = store => ({
    handleInput: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    },

    handleChange: async (state, target, value) => {
        await store.setState({[target]:value});
    },

    handleManyChanges: (state, dict) => {
        store.setState(dict);
    },

    handleGetApi: async (state, urlHeadLine) => {
        await axios
            .get(urlHeadLine)
            .then(async (response) => {
                await store.setState({data: response.data})
                await store.setState({listMovies: response.data.movies})
            })
            .catch((error) => {
                console.warn(error)
            })
    }
})
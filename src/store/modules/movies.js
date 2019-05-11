import axios from 'axios'

// Get variables from config
const { VUE_APP_API_URL, VUE_APP_API_KEY } = process.env

// Initial State
const state = {
  movies: [],
  movie: {},
}

// Getters
const getters = {
  /**
   * @desc Get the movies
   * @param {Object} state - The current state
   * @return {Array} movies
   */
  movies: state => state.movies,

  /**
   * @desc Get a movie
   * @param {Object}
   * @return {Object} movie
   */
  movie: state => state.movie,
}

// Actions
const actions = {
  /**
   * @desc Clear the movies from the state
   * @param {Object} obj - An object of Vuex funcs
   * @param {function} commit - Commit mutation
   */
  clearMovies: ({ commit }) => {
    // Commit mutation
    commit('clearMovies')
  },

  /**
   * @desc Clear the movie from the state
   * @param {Object} obj - An object of Vuex funcs
   * @param {function} commt - Commit mutation
   */
  clearMovie: ({ commit }) => {
    // Commit mutation
    commit('clearMovie')
  },

  /**
   * @desc Fetch the most popular movies
   * @param {Object} obj - An object of Vuex funcs
   * @param {function} commit - Commit mutation
   * @param {Object} payload - An object of passed params
   * @param {number} page - Page number to fetch
   * @param {boolean} append - Whether to append to current state
   */
  getSortedMovies: ({ commit }, { page, append /* , sortType */ }) => {
    // Endpoint
    const url = `${VUE_APP_API_URL}/discover/movie`

    /**
     * @Feat Include different sorting types
     */
    const sortBy = 'popularity.desc' // If sortType is undefined

    // Get movies
    axios
      .get(url, {
        params: {
          api_key: VUE_APP_API_KEY,
          sort_by: sortBy,
          page,
        },
      })
      .then(response => {
        const { results } = response.data

        // Commit mutation based on append param
        if (append) {
          // Add movies to current state
          commit('addMovies', results)
        } else {
          // Replace current movies state
          commit('setMovies', results)
        }
      })
  },

  /**
   * @desc Fetch movies by user query
   * @param {Object} obj - An object of Vuex funcs
   * @param {function} commit - Commit mutation
   * @param {Object} payload - An object of passed params
   * @param {string} query - User query
   * @param {number} page - Page number to fetch
   * @param {boolean} append - Whether to append to current state
   */
  getMoviesByQuery: ({ commit }, { query, page, append }) => {
    // Endpoint
    const url = `${VUE_APP_API_URL}/search/movie`

    // Get movies
    axios
      .get(url, {
        params: {
          api_key: VUE_APP_API_KEY,
          query: encodeURIComponent(query), // Encode string
          page,
        },
      })
      .then(response => {
        const { results } = response.data

        // Commit mutation based on append param
        if (append) {
          // Add movies to current state
          commit('addMovies', results)
        } else {
          // Replace current movies state
          commit('setMovies', results)
        }
      })
  },

  /**
   * @desc Fetch movie by id
   * @param {Object} obj - An object of Vuex funcs
   * @param {function} commit - Commit mutation
   * @param {Object} payload - An object of passed params
   * @param {number} id - Unique id of movie
   */
  getMovieById: ({ commit }, { id }) => {
    // Endpoint
    const url = `${VUE_APP_API_URL}/movie/${id}`

    // Additional data to request
    const appendToResponse = ['credits', 'recommendations'].join(',')

    // Get movie
    axios
      .get(url, {
        params: {
          api_key: VUE_APP_API_KEY,
          append_to_response: appendToResponse,
        },
      })
      .then(response => {
        const { data } = response

        // Commit mutation
        commit('setMovie', data)
      })
  },
}

// Mutations
const mutations = {
  /**
   * @desc Clear the movies state
   * @param {Object} state - The current state
   */
  clearMovies: state => (state.movies = []),

  /**
   * @desc Clear the movie state
   * @param {Object} state - The current state
   */
  clearMovie: state => (state.movies = []),

  /**
   * @desc Set movies state
   * @param {Object} state - The current state
   * @param {Array} movies - The movies to be set
   */
  setMovies: (state, movies) => (state.movies = movies),

  /**
   * @desc Add movies to state
   * @param {Object} state - The current state
   * @param {Array} movies - The movies to be added
   */
  addMovies: (state, movies) => state.movies.push(...movies),

  /**
   * @desc Set the movie state
   * @param {Object} state - The current state
   * @param {Object} movie - The movie to be set
   */
  setMovie: (state, movie) => (state.movie = movie),
}

export default {
  state,
  getters,
  actions,
  mutations,
}

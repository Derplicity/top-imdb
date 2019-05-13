import axios from 'axios'

// Get config variables
const { VUE_APP_API_URL, VUE_APP_API_KEY } = process.env

export default {
  /**
   * @desc Fetch sorted movies
   * @param {string} sortBy - Sort filter
   * @param {number} page - Page number to fetch
   * @return {Promise} with sorted movies
   */
  getSorted(sortBy, page) {
    // Endpoint
    const url = `${VUE_APP_API_URL}/discover/movie`

    // Return sorted movies promise
    return axios.get(url, {
      params: {
        api_key: VUE_APP_API_KEY,
        sort_by: sortBy,
        page,
      },
    })
  },

  /**
   * @desc Fetch movies by user query
   * @param {string} query - User query
   * @param {number} page - Page number to fetch
   * @return {Promise} with queried movies
   */
  getQueried(query, page) {
    // Endpoint
    const url = `${VUE_APP_API_URL}/search/movie`

    // Return queried movies promise
    return axios.get(url, {
      params: {
        api_key: VUE_APP_API_KEY,
        query: encodeURIComponent(query), // Encode string
        page,
      },
    })
  },

  /**
   * @desc Fetch movie by id
   * @param {number} id - Unique id of movie
   * @return {Promise} with movie
   */
  getById(id) {
    // Endpoint
    const url = `${VUE_APP_API_URL}/movie/${id}`

    // Additional data to request
    const appendToResponse = ['credits', 'recommendations'].join(',')

    // Return movie promise
    return axios.get(url, {
      params: {
        api_key: VUE_APP_API_KEY,
        append_to_response: appendToResponse,
      },
    })
  },
}

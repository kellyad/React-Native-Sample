const FETCHING_DATA = 'FETCHING_DATA'
const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'

export function fetchData () {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess (data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  }
}

export function getDataFailure (error) {
  return {
    type: FETCHING_DATA_FAILURE,
    errorMessage: error
  }
}
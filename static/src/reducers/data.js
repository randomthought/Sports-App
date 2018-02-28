import { FETCH_PROTECTED_DATA_REQUEST, RECEIVE_PROTECTED_DATA } from '../constants/index';
import { parseJSON } from '../utils/misc';
// Include required functions defined in http_functions.js fle
import { data_about_user, nba_2016_2017_Season, competitions, premier_league, manchester_united, manchester_united_players, manchester_united_home_fixtures } from '../utils/http_functions';
import { logoutAndRedirect } from './auth';

export function receiveProtectedData(data) {
    return {
        type: RECEIVE_PROTECTED_DATA,
        payload: {
            data,
        },
    };
}

export function fetchProtectedDataRequest() {
    return {
        type: FETCH_PROTECTED_DATA_REQUEST,
    };
}

export function fetchProtectedData(token) {
    return (dispatch) => {
        dispatch(fetchProtectedDataRequest());
        data_about_user(token)
            .then(parseJSON)
            .then(response => {
                dispatch(receiveProtectedData(response.result));
            })
            .catch(error => {
                if (error.status === 401) {
                    dispatch(logoutAndRedirect(error));
                }
            });
    };
}

// fetch nba 2016-2017 season data
export function fetch_NBA_2016_2017_Season_Data() {
    return (dispatch) => {
        nba_2016_2017_Season().then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}

// fetch competition data
export function fetchCompetitions() {
    return (dispatch) => {
        competitions().then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}

// fetch premier_league data
export function fetchPremierLeague() {
    return (dispatch) => {
        premier_league().then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}

// fetch manchester_united data
export function fetchTeam(id) {
    return (dispatch) => {
        show_team(id).then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}

// fetch manchester_united_players data
export function fetchPlayers(id) {
    return (dispatch) => {
        players(id).then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}

// fetch manchester_united_home_fixtures data
export function fetchFixtures(id) {
    return (dispatch) => {
        fixtures(id).then(parseJSON).then(response => {
                dispatch(response.result);
            });
            // We are not catching errors for now
            /*.catch(error => {
                if (error.status === 401) {
                    // *** will have to create proper error message***
                    dispatch(logoutAndRedirect(error));
                }
            }); */
    };
}
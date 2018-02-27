/* eslint camelcase: 0 */

import axios from 'axios';

const tokenConfig = (token) => ({
    headers: {
        'Authorization': token, // eslint-disable-line quote-props
    },
});

export function validate_token(token) {
    return axios.post('/api/is_token_valid', {
        token,
    });
}

export function get_github_access() {
    window.open(
        '/github-login',
        '_blank' // <- This is what makes it open in a new window.
    );
}

export function create_user(email, password) {
    return axios.post('/api/create_user', {
        email,
        password,
    });
}

export function get_token(email, password) {
    return axios.post('/api/get_token', {
        email,
        password,
    });
}

export function has_github_token(token) {
    return axios.get('/api/has_github_token', tokenConfig(token));
}

export function data_about_user(token) {
    return axios.get('/api/user', tokenConfig(token));
}

// Retrieve 2016-2017 Season
// Get returned output defined in app.py file
export function nba_2016_2017_Season() {
    return axios.get('/api/nba_2016_2017');
}

// Retrieve competitions 
// from returned ouput defined in app.py file
export function competitions() {
    return axios.get('/api/competitions');
}

// Retrieve premier league teams 
// from returned ouput defined in app.py file
export function premier_league() {
    return axios.get('/api/premier_league');
}

// Retrieve Manchester United FC 
// from returned ouput defined in app.py file
export function manchester_united() {
    return axios.get('/api/manchester_united');
}

// Retrieve Manchester United Players
// from returned ouput defined in app.py file
export function manchester_united_players() {
    return axios.get('/api/manchester_united_players');
}

// Retrieve Manchester United Home fixtures
// from returned ouput defined in app.py file
export function manchester_united_home_fixtures() {
    return axios.get('/api/manchester_united_home_fixtures');
}


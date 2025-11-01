// client/src/actions/authActions.js
import axios from 'axios';

// 🚀 FIXED: API_URL যোগ করা হয়েছে
const API_URL = process.env.REACT_APP_API_URL; 

// Remove Alert (এটি অপরিবর্তিত)
export const removeAlert = (id) => ({
    type: 'REMOVE_ALERT',
    payload: id
});

// Set Alert (এটি অপরিবর্তিত)
export const setAlert = (msg, type, timeout = 1500) => (dispatch) => {
    const id = Date.now();
    dispatch({
        type: 'SET_ALERT',
        payload: { msg, type, id }
    });

    // নির্দিষ্ট সময় পর অটো রিমুভ
    setTimeout(() => {
        dispatch(removeAlert(id));
    }, timeout);
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_LOADING' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        // 🚀 পরিবর্তন: API_URL যোগ করা হলো
        const res = await axios.post(`${API_URL}/api/auth/register`, userData, config);

        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data
        });

        dispatch(setAlert('Registered!', 'success'));

    } catch (error) {
        const message = error.response?.data?.message || 'Registration failed';

        dispatch({
            type: 'AUTH_ERROR',
            payload: message
        });

        dispatch(setAlert(message, 'error'));
    }
};

// Login User
export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'AUTH_LOADING' });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // 🚀 পরিবর্তন: API_URL যোগ করা হলো
        const res = await axios.post(`${API_URL}/api/auth/login`, { email, password }, config);

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        });

        dispatch(setAlert('Logged in!', 'success'));

    } catch (error) {
        console.error('Login error:', error);

        let message = 'Login failed';
        if (error.response) {
            message = error.response.data?.message || `Server error: ${error.response.status}`;
        } else if (error.request) {
            message = 'No response from server. Please check if backend is running.';
        } else {
            message = error.message;
        }

        dispatch({
            type: 'AUTH_ERROR',
            payload: message
        });

        dispatch(setAlert(message, 'error'));
    }
};

// Logout User
export const logoutUser = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    dispatch(setAlert('Logged out!', 'success'));
};

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch({ type: 'AUTH_ERROR' });
            return;
        }

        const config = {
            headers: {
                'x-auth-token': token
            }
        };

        // 🚀 পরিবর্তন: API_URL যোগ করা হলো
        const res = await axios.get(`${API_URL}/api/auth/user`, config);

        dispatch({
            type: 'USER_LOADED',
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: 'AUTH_ERROR' });
    }
};
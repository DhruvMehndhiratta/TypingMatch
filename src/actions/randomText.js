import types from '../types';
import store from "../store";
import {
    GenerateRandomTextAPI
}
    from '../api/randomText';

const { dispatch } = store;





export const generateText = () => dispatch =>
    new Promise((resolve, reject) => {
        dispatch({
            type: types.GENERATE_RANDOM_TEXT
        });
        GenerateRandomTextAPI()
            .then(res => {
                dispatch({
                    type: types.GENERATE_RANDOM_TEXT_SUCCESS,
                    payload: res
                });

                return resolve(res);
            })
            .catch(err => {
                dispatch({
                    type: types.GENERATE_RANDOM_TEXT_FAILED
                });
                reject(err);
            });
    });

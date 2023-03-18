import axios from 'axios';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = 'https://api.homerfoods.com/';

export const post = async (url, data = {}, config = {}) => {
    try{
    const response = await axios.post(url, data, { ...config });

    return response.data;

    } catch (error) {

        console.log(error);

        return error.response.data;

    }
}


export const get = async (url, config = {}) => {
    try {
        const response = await axios.get(url, { ...config });

        return response.data;

    } catch (error) {

        console.log(error);

        return error.response.data;

    }
}


export const update = async (url, data = {}, config = {}) => {
    try {
        const response = await axios.patch(url, data, { ...config });

        return response.data;

    } catch (error) {

        console.log(error);

        return error.response.data;

    }
}

export const del = async (url, data = {}, config = {}) => {
    try {
        const response = await axios.delete(url, data, { ...config });

        return response.data;

    } catch (error) {

        console.log(error);

        return error.response.data;

    }
}

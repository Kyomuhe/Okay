import { ServerUrl } from "../Config/config";
import { toast } from "sonner";
import axios from "axios";

export const showToast = (message, type) => {
    switch (type) {
        case 'success':
            return toast.success(message, {
                duration: 4000,
                style: { background: 'green', color: 'white' }
            });
        case 'error':
            return toast.error(message, {
                duration: 4000,
                style: { background: 'red', color: 'white' }
            });
        default:
            return toast(message);
    }
}
export const makeRequest = async (ACTION, SERVICE, data) => {
    try {
        let url = ServerUrl;
        const payload = { ACTION, SERVICE, ...data };
        console.log('request payload', JSON.stringify(payload));

        let config = {
            headers: { "content-Type": "application/json" }
        };
        const response = await axios.post(url, payload, config)
        return response.data;
    } catch (error) {
        console.error("An error occured while making request")
        if (error.response) {
            throw error.response.data || error;
        } else {
            throw new Error(error.message)
        }
    }
}
export const getToken = () => {
    return localStorage.getItem('accessToken');
}

export const makeAuthenticatedRequest = async (ACTION, SERVICE, data) => {
    const token = getToken();
    try {
        let url = ServerUrl
        const payload ={ACTION, SERVICE, ...data};
        let config ={
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        };
        const response = await axios.post(url,payload,config)
        console.log("request was successful");
        return response.data;

    } catch (error) {
        console.error("An error occured while making a request")
        if (error.response) {
            throw error.response.data || error;
        } else {
            throw new Error(error.message)
        }
    }
}
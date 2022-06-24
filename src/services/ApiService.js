import axios from 'axios'

const NOTION_ENDPOINT = process.env.VUE_APP_NOTION_ENDPOINT

const request = async (
    url,
    method = 'get'
) => {
    try {
        const response = await axios({
            url: url,
            method: method,
            auth: {
                username: process.env.VUE_APP_NOTION_API_USER,
                password: process.env.VUE_APP_NOTION_API_SECRET
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error performing API Request', error);
        throw new Error('API Request failed')
    }
}

export const queryNotion = database => request(NOTION_ENDPOINT+'/'+database)

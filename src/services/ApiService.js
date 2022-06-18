import axios from 'axios'

class ApiService {
    #NOTION_ENDPOINT = process.env.VUE_APP_NOTION_ENDPOINT

    queryNotion(database) {
        return this.#request(this.#NOTION_ENDPOINT+'/'+database)
    }

    async #request(
        url,
        method = 'get'
    ) {
        try {
            const response = await axios({
                url: url,
                method: method
            });
            return response.data;
        } catch (error) {
            console.error('Error performing API Request', error);
            throw new Error('API Request failed')
        }
    }
}

export default new ApiService()

import httpService from './http.service';

const professionEndPoint = 'profession/';

const professionsService = {
    get: async () => {
        const { data } = await httpService.get(professionEndPoint);
        return data;
    }
};

export default professionsService;

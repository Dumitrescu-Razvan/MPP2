import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const addGame = async (game) => {
    const response = await axios.post(`${API_URL}/games`, game);
    return response.data;
}

export const editGame = async (game) => {
    const response = await axios.put(`${API_URL}/games/${game.id}`, game);
    return response.data;
}

export const deleteGame = async (id) => {
    const response = await axios.delete(`${API_URL}/games/${id}`);
    return response.data;
}

export const getGames = async () => {
        const response = await axios.get(`${API_URL}/games`);
        return response.data;
}
export const getGame = async (id) => {
    const response = await axios.get(`${API_URL}/games/${id}`);
    console.log(response.data);
    return response.data;
}

export const setGames = async (games) => {
    const response = await axios.post(`${API_URL}/setgames`, games);
    return response.data;
}
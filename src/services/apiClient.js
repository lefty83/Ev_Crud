import {apiClient} from '../plugins/pluginAxios.js'; // Importa tu instancia de Axios si está configurada en /plugins

// Función GET
export async function getData(url) {
    try {
        const response = await apiClient.get(url);
        return response; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error en la petición GET:', error);
        throw error; // Opcionalmente, puedes manejar el error o lanzarlo
    }
};

// Función POST
export async function postData(url, data) {
    try {
        console.log('this is data from postData: ', data);
        console.log('this is url: ', url);
        const response = await apiClient.post(url, data);
        return response; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error en la petición POST:', error);
        throw error;
    }
}

// Función PUT
export async function putData(url, data) {
    try {
        const response = await apiClient.put(url, data);
        console.log('this is data from putData: ', data);
        console.log('this is URL from putData: ', url);
        
        return response; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error en la petición PUT:', error);
        throw error;
    }
}
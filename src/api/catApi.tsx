export interface CatType {
    id: string;
    url: string;
}

export const fetchCats = async (page: number) => {
    const response = await fetch(import.meta.env.VITE_REACT_URL + page, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_REACT_API_KEY,
        }
    });

    const data = await response.json();
    return data;
};

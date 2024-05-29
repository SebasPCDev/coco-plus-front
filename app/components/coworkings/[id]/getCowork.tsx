export const getCowork = async (id: string) => {
    const url = process.env.API_URL
    try {
        const response = await fetch(`${url}/coworkings/${id}`);

        if (!response.ok) throw response;
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

export default getCowork;                                  

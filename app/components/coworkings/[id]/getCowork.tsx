export const getCowork = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/coworkings/${id}`);

        if (!response.ok) throw response;
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

export default getCowork;                                  

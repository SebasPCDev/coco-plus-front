export const getCowork = async (id: string) => {    
    const urlBase = process.env.NEXT_PUBLIC_API_URL;                               
    try {                                   
        const response = await fetch(`${urlBase}/coworkings/${id}`);                                     
        const data = await response.json();
        console.log(data);                      
        return data
    } catch (error) {                                   
        console.error("Error fetching product:", error);                                    
        return null;                                    
    }                                   
};                                  
                                    
export default getCowork;                                  

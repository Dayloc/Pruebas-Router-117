     //PAso3
const urlBaase ="https://playground.4geeks.com/todo/"

export const getUsers = async ( dispatch ) => {
    try {
        const response = await fetch(`${urlBaase}users`);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }

        const data = await response.json();

       dispatch({
            type: "SaveUsers",
            payload: data.users 
        }); 

        //console.log(data.users)
        
        return data;

    } catch (error) {
        console.log("Error al cargar los usuarios:", error);
    }
};
//hola

//comentario creado  para ver como sube el cambio

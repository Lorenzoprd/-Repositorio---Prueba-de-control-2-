const api_url = 'https://randomuser.me/'

const getUsers = async() => {
    try{
        const numberOfUsers = 5;
        const response = await fetch(
            `https://randomuser.me/api/?results=${numberOfUsers}`
        );
        const members = [];
        const{ results } = await response.json();
        for (const user of results) {
            const nombre = user.name.first;
            const apellido = user.name.last;
            const sexo = user.gender;
            const pais = user.location.country;
            const email = user.email;
            const foto = user.picture.medium;
            members.push(nombre,apellido,sexo,pais,email,foto);
        };
        return members;
    } catch(error){
        return error;
    }
};
getUsers(api_url).then((results) => console.log(results));

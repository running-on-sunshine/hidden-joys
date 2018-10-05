let generateId = () => {
    const alphabet = '23456789abdegjkmnpqrvwxyz';
    let id_length = 10;
    let id = '';
    for (let i = 0; i < id_length; i++) {
        id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return id;
};

export default generateId;
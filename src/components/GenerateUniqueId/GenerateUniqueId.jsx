const GenerateUniqueId = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); 
    const id = `car_${randomNumber}`;
    return id;
};

export default GenerateUniqueId;

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../doctors.json');

class Doctor {
    constructor(id, name, surname, specialization, age, email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.specialization = specialization;
        this.age = age;
        this.email = email;
    }
}

const getAllDoctors = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data).map(doc => new Doctor(doc.id, doc.name, doc.surname, doc.specialization, doc.age, doc.email));
};

const getDoctorById = (id) => {
    const doctors = getAllDoctors();
    return doctors.find(doc => doc.id === id);
};

const addDoctor = (newDoctor) => {
    const doctors = getAllDoctors();
    doctors.push(newDoctor);
    fs.writeFileSync(filePath, JSON.stringify(doctors, null, 2));
};

module.exports = { Doctor, getAllDoctors, getDoctorById, addDoctor };
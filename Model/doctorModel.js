const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../doctors.json');

class Doctor {
    constructor(id, imie, nazwisko, specjalizacja, wiek, email) {
        this.id = id;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.specjalizacja = specjalizacja;
        this.wiek = wiek;
        this.email = email;
    }
}

const getAllDoctors = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data).map(doctor => new Doctor(doctor.id, doctor.imie, doctor.nazwisko, doctor.specjalizacja, doctor.wiek, doctor.email));
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
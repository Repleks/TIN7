const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../doctors.json');

const getAllDoctors = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
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

module.exports = { getAllDoctors, getDoctorById, addDoctor };

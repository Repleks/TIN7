const { Doctor, getAllDoctors, getDoctorById, addDoctor } = require('../Model/doctorModel');

exports.listDoctors = (req, res) => {
    const doctors = getAllDoctors();
    res.render('listDoctors', { doctors });
};

exports.showDoctorDetails = (req, res) => {
    const doctor = getDoctorById(parseInt(req.params.id));
    if (!doctor) {
        return res.status(404).send('Lekarz nie znaleziony');
    }
    res.render('doctorDetails', { doctor });
};

exports.showAddDoctorForm = (req, res) => {
    res.render('addDoctor');
};

exports.addDoctor = (req, res) => {
    const { name, surname, specialization, age, email } = req.body;
    if (!name || !surname || !specialization || !email || isNaN(age)) {
        return res.status(400).send('Niepoprawne dane.');
    }
    const newDoctor = new Doctor(Date.now(), name, surname, specialization, parseInt(age), email);
    addDoctor(newDoctor);
    res.redirect('/doctors');
};
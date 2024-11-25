const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { listDoctors, showDoctorDetails, showAddDoctorForm, addDoctor } = require('./Controller/doctorController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/doctors', listDoctors);
app.get('/doctors/add', showAddDoctorForm);
app.post('/doctors/add', addDoctor);
app.get('/doctors/:id', showDoctorDetails);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie 3000`));
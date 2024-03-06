const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const hotel = require("./schema");
const Registration = require("./scheemaReg");
const hotelbooking = require("./scheemaHotelbooking");


mongoose.connect('mongodb://0.0.0.0:27017/oyehotel')

    .then((x) => {
        console.log(`data base connect to :"${x.connections[0].name}"`)
    })




app.use('/public/images', express.static('public/images'))

const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cd) => {
        cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})



app.listen(10000, () => {

    console.log("server started on port 10000");
})







app.post('/hotelcard', upload.single('image'), (req, res) => {

    const hotelname = req.body.hotelname;
    const location = req.body.location;
    const days = req.body.days;
    const rent = req.body.rent;
    const image = req.file.path;
    const data = new hotel({

        hotelname: hotelname,
        hotellocation: location,
        hoteldays: days,
        hotelrent: rent,
        hotelimage: image,



    });
    console.log(data);

    data.save()

        .then(x => {
            res.send('record save')
        })
});

app.post('/hotelcardshow', async (req, res) => {
    const kun = await hotel
        .find({});
    res.send({ data: kun });
});
app.post('/regdata', async (req, res) => {
    const kun = await Registration
        .find({});
    res.send({ data: kun });
});







app.post('/regdatasend', (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const gmailid = req.body.gmailid;
    const password = req.body.password;
    const username = req.body.username;

    const data = new Registration({
        name: name,
        lastname: lastname,
        gmailid: gmailid,
        password: password,
        username: username,
    });
    console.log(data);
    data.save()
        .then(x => {
            res.send('record save')
        })
});







app.post('/hotelbooking', (req, res) => {
    const fullname = req.body.fullname;
    const hotelname = req.body.hotelname;
    const gmailid = req.body.gmail;
    const hotellocation = req.body.hotellocation;
    const username = req.body.username;
    const checkindate = req.body.checkindate;
    const checkoutdate = req.body.checkoutdate;
    const child = req.body.child;
    const adult = req.body.adult;
    const aadhar = req.body.aadhar;
    const mobileno = req.body.mobileno;
    const data = new hotelbooking({
        fullname: fullname,
        hotelname: hotelname,
        gmailid: gmailid,
        hotellocation: hotellocation,
        username: username,
        checkindate: checkindate,
        checkoutdate: checkoutdate,
        child: child,
        adult: adult,
        aadhar: aadhar,
        mobileno: mobileno,
    });
    console.log(data);
    data.save()
        .then(x => {
            res.send('record save')
        })
});
app.post('/findbooking/:username1/', async (req, res, next) => {


    const username = req.params.username1
    const p = await hotelbooking.find({ username: username });
    res.send({ data: p })
})

app.post('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
    const u = await Registration.find({ _id: req.params.id });
    res.send({ data: u })
})
app.post('/forgate/:username2/:gmail2', async (req, res, next) => {

    const gmailid = req.params.gmail2
    const username = req.params.username2
    const p = await Registration.find({ username: username, gmailid: gmailid });
    res.send({ data: p })
})
app.post('/update/:id', upload.single('profileimg'), async (req, res, next) => {
    const jj = await Registration.findByIdAndUpdate({ "_id": req.params.id }, { "name": req.body.name, "password": req.body.password, "lastname": req.body.lastname, "username": req.body.username, "gmailid": req.body.gmailid, "country": req.body.country, "state": req.body.state, "city": req.body.city, "pincode": req.body.pincode, "profileimg": req.file.path, "mobileno": req.body.mobileno });


    res.send({ data: jj })
})
app.post('/setpassword/:check', async (req, res, next) => {
    const oo = await Registration.findByIdAndUpdate({ "_id": req.params.check }, { "password": req.body.newpassword1 })
    res.send({ data: oo })
})
app.post('/name/:username1/:password1', async (req, res) => {

    const login = await Registration.find({ username: req.params.username1, password: req.params.password1 });
    res.send({ data: login });
});


app.get('/', (req, res) => {
    res.send('server start');
});
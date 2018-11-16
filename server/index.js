const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'moyeora', // database
    'moyeora', // username
    'moyeora12341234', // password
    {
        host: 'localhost', // url
        dialect: 'mysql', // database type
    },
);

const offerTable = sequelize.define('offer', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    groupname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    itemname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const userGroupTable = sequelize.define('user_group', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    groupname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const requestTable = sequelize.define('request', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    offerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    requestor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello Express!',
    });
});

app.post('/', (req, res) => {
    res.json({
        'result': Number(req.body.a) + 1,
    });
});

app.get('/offers', async (req, res) => {
    res.json(await offerTable.findAll());
})

app.post('/offer', async (req, res) => {
    const { groupname, itemname } = req.body;
    await offerTable.create({
        groupname,
        itemname,
    });
    res.json({ msg: 'success' });
});

app.listen(3000, () => {
    console.log('Server application successfully initiated on port 3000');
});

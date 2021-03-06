const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const cors = require('cors');

const sequelize = new Sequelize(
    process.env.MOY_DB || 'moyeora', // database
    process.env.MOY_USERNAME || 'moyeora', // username
    process.env.MOY_PASSWORD || 'moyeora12341234', // password
    {
        host: 'localhost', // url
        dialect: 'mysql', // database type
        dialectOptions: {
            insecureAuth: true,
        },
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
}, {
    timestamps: false,
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
}, {
    timestamps: false,
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
}, {
    timestamps: false,
});

offerTable.hasMany(requestTable, { foreignKey: 'offerId' });

// sequelize.sync({ force: true });

app = express();

app.use(bodyParser.json());
app.use(cors());

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

app.post('/register/usergroup', async (req, res) => {
    const username = req.body.username;
    const groupname = req.body.groupname;

    console.log('got request', username, groupname);

    const row = await userGroupTable.findOne({
        where: {
            username,
        },
    });

    if (row === null) {
        await userGroupTable.create({ username, groupname });
    } else {
        await userGroupTable.update({ groupname }, { where: { id: row.id } });
    }
    
    res.json({ success: 1 });
})

app.get('/offers/:pageNum', async (req, res) => {
    const pageNum = req.params.pageNum;
    const offset = (pageNum - 1) * 5;
    const offers = await offerTable.findAll({
        include: [{ model: requestTable, as: 'requests' }],
        offset,
        limit: 5,
    });
    const offerNum = await offerTable.count();
    res.json({ success: 1, offers, offerNum });
})

app.get('/offer/:offerId', async (req, res) => {
    const { offerId } = req.params;
    const offer = await offerTable.findOne({
        where: {
            id: offerId,
        },
        include: [{ model: requestTable, as: 'requests' }],
    });
    if (offer === null) {
        return res.json({ success: 0, msg: 'Offer not found' });
    }
    res.json({ success: 1, offer });
})

app.post('/offer', async (req, res) => {
    const { username, itemname } = req.body;
    const userGroup = await userGroupTable.findOne({
        where: {
            username,
        },
    });
    if (userGroup === null) {
        return res.json({ success: 0, msg: 'Group not registered' });
    }
    const groupname = userGroup.groupname;
    const offer = await offerTable.create({ groupname, itemname });
    res.json({ success: 1, offer });
})

app.post('/offer/:offerNum/request', async (req, res) =>{
    const {username, cost} = req.body;
    const offerNum = req.params.offerNum;
    const offer = await offerTable.findOne({
        where: {
            id: offerNum,
        },
    });
    if (offer === null) {
        return res.json({ success: 0});
    }
    const request = await requestTable.create({offerId: offerNum, requestor: username, cost});
    res.json({ success: 1, request});
})

app.get('/offer/:offerNum/requests', async (req, res) => {
    const offerNum = req.params.offerNum;
    const requests = await requestTable.findAll({
        where: {
            offerId: offerNum,
        },
    });
    res.json({success: 1, requests});
})

app.listen(3001, () => {
    console.log('Server application successfully initiated on port 3000');
});

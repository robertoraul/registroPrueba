var Sequelize= require('Sequelize');
var conexion = new Sequelize('regapp01','root','',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


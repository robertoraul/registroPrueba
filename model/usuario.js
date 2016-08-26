var Sequelize = require('sequelize');

var Usuario = sequelize.define('usuario',{
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    usuario: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    nivel: {type: Sequelize.TEXT('tiny') },
    nombre: {type: Sequelize.STRING},
    apellido: {type: Sequelize.STRING},
    idGL: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    obs: {type: Sequelize.TEXT},
    fechaSistema: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    activo: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
},{
    timeStamp:false,
    freezeTableName: true
});
module.exports = Usuario;
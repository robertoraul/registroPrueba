var Sequelize = require('sequelize');

var Variable = sequelize.define('registrovariables',{
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    idRegistro: {type: Sequelize.INTEGER},
    capitulo: {type: Sequelize.STRING},
    variableNro: {type: Sequelize.INTEGER},
    variableNombre: {type: Sequelize.STRING},
    fechaAltaVar: {type: Sequelize.DATE},
    fechaModifVar: {type: Sequelize.DATE},
    fechaBajaVar: {type: Sequelize.DATE},
    especifica: {type: Sequelize.BOOLEAN},
    variableDetalle: {type: Sequelize.TEXT},
    variableUnidadMedida: {type: Sequelize.STRING},
    fechaSistema: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    activo: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
},{
    timeStamp:false,
    freezeTableName: true
});

module.exports = Variable;

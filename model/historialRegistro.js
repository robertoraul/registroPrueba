/**
 * Created by rcard on 26/08/2016.
 */
var Sequelize = require('sequelize');

var HistorialRegistro = sequelize.define('historialRegistro',{
    id:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
    idUsuario: {type: Sequelize.INTEGER},
    idRegistro:{type: Sequelize.INTEGER},
    fechaOperacion: {type: Sequelize.DATE},
    obs: {type: Sequelize.TEXT},
    fechaSistema:{type: Sequelize.DATE, defaultValue: Sequelize.NOW}
},{
    timeStamp:false,
    freezeTableName: true
});

module.exports = HistorialRegistro;

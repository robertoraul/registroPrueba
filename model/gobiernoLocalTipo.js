/**
 * Created by rcard on 26/08/2016.
 */
var Sequelize = require('sequelize');

var GobiernoLocalTipo = sequelize.define('gobiernoLocalTipo', {
    idTipoLocal: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    tipoLocal: {type: Sequelize.STRING},
    siglaTipoGL: {type: Sequelize.STRING}
},{
    timeStamp:false,
    freezeTableName: true
});
module.exports= GobiernoLocalTipo;
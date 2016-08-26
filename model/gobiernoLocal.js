var Sequelize = require('sequelize');

var GobiernoLocal= sequelize.define('gobiernoLocal',{
    codGL:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    tipoGL:{type: Sequelize.INTEGER},
    nombreGL:{type: Sequelize.STRING},
    pob2010:{type: Sequelize.INTEGER},
    fechaSistema:{type: Sequelize.DATE, defaultValue: Sequelize.NOW}
},{
    timeStamp:false,
    freezeTableName: true
});

module.exports = GobiernoLocal;
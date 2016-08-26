var Sequelize = require ('sequelize');

var HistorialVariable = sequelize.define('historialvariable',{
    id:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
    idUsuario:{type: Sequelize.INTEGER},
    idRegistro:{type: Sequelize.INTEGER},
    idVariable:{type: Sequelize.INTEGER},
    fechaOperacion:{type: Sequelize.DATE},
    tipoOperacion:{type: Sequelize.STRING},
    obs:{type: Sequelize.TEXT},
    fechaSistema:{type: Sequelize.DATE, defaultValue: Sequelize.NOW}
},{
    timeStamp:false,
    freezeTableName: true
});

module.exports = HistorialVariable;

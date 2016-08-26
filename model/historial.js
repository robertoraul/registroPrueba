var Sequelize = require ('sequelize');

var Historial = sequelize.define('historial',{
    id:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
    idUsuario:{type: Sequelize.INTEGER},
    idRegistro:{type: Sequelize.INTEGER},
    idTabla:{type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
    fechaOperacion:{type: Sequelize.DATE},
    tipoOperacion:{type: Sequelize.STRING},
    obs:{type: Sequelize.TEXT},
    fechaSistema:{type: Sequelize.DATE, defaultValue: Sequelize.NOW}
},{
    timeStamp:false,
    freezeTableName: true
});

module.exports = Historial;
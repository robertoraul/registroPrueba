var Sequelize = require('sequelize');

var Registro = sequelize.define('registro',{
    id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    sector:{type: Sequelize.STRING},
    nombreRegistro:{type: Sequelize.STRING},
    informatizado:{type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
    objetivoRegistro:{type: Sequelize.STRING},
    nomApellido:{type: Sequelize.STRING},
    puestoOrg:{type: Sequelize.STRING},
    telefono:{type: Sequelize.STRING},
    email:{type: Sequelize.STRING},
    obsSector:{type: Sequelize.TEXT},
    obsNomRegistro:{type: Sequelize.TEXT},
    obsInformatizado:{type: Sequelize.TEXT},
    obsObjetivoRegistro:{type: Sequelize.TEXT},
    obsNomApellido:{type: Sequelize.TEXT},
    obsPuestoOrg:{type: Sequelize.TEXT},
    obsTelefono:{type: Sequelize.TEXT},
    obsEmail:{type: Sequelize.TEXT},
    provincia:{type: Sequelize.STRING},
    idGL:{type: Sequelize.STRING},
    goblocal:{type: Sequelize.STRING},
    tipoGobLocal:{type: Sequelize.STRING},
    codGobLocal:{type: Sequelize.STRING},
    fechaAltaReg:{type: Sequelize.DATE},
    fechaModifReg:{type: Sequelize.DATE},
    fechaBajaReg:{type: Sequelize.DATE},
    obsFechaAltaReg:{type: Sequelize.TEXT},
    obsFechaModifReg:{type: Sequelize.TEXT},
    obsFechaBajaReg:{type: Sequelize.TEXT},
    activo:{type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
    createdAt:{type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    updatedAt:{type: Sequelize.DATE, defaultValue: Sequelize.NOW}
}, {
    timeStamp:false,
    freezeTableName: true
});
module.exports = Registro;
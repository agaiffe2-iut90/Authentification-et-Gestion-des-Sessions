const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config  = require('../config/db.config');


// Création d'une instance Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Objet pour stocker les modèles
const db = {};

// Charger tous les modèles dans le répertoire actuel
fs.readdirSync(__dirname)
    .filter(function(file) {
        // Exclure les fichiers commençant par un point (ex: .gitignore) et index.js
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        // Charger chaque modèle et l'ajouter à l'objet db
        const model = require(path.join(__dirname, file))(sequelize);
        db[model.name] = model;
    });

// Ajouter sequelize et Sequelize à l'objet db pour un accès global
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exporter l'objet db contenant tous les modèles
module.exports = db;

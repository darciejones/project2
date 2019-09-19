
 module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    yourName: DataTypes.STRING,
    product: DataTypes.STRING
  }, {
    freezeTableName: true
  }
  
  );
  
  Product.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Product.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Product;
};



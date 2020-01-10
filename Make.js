const generators = require("./generators");
const Types = require("./Types");
class Schema {
  constructor(dataTypes) {
    this.name = "";
    this.dataTypes = dataTypes;
  }

  makeOne() {
    var fakeModel = {};
    Object.keys(this.dataTypes).forEach(element => {
      fakeModel[element] = this.handleTypes(this.dataTypes[element].type);
    });
    return fakeModel;
  }

  handleTypes(type) {
    switch (type) {
      case Types.FirstName:
        this.name = generators.generateName(type);
        return this.name;

      case Types.LastName:
        return generators.generateName(type);

      case Types.Price:
        return generators.generatePrice();

      case Types.Email:
        return generators.generateEmail(this.name);

      case Types.Password:
        return generators.generatePassword(
          this.dataTypes.Password.defaultPassword
        );

      default:
        throw new Error(`"${type}" type is not supported`);
    }
  }
}

module.exports = { Schema, Types };

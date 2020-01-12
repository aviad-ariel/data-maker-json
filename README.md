# data-maker-json
Genarte fake data.

#### Inatall via NPM:
    npm i data-maker-json
    
#### Usage:
###### Require dataMakerJson:  
    var dataMakerJson = require("data-maker-json");

###### Constract schema:
    const schema = new dataMakerJson.Schema({
        your-field-name: {
          type: Make.Types.some-type,
          optional-setting: value,
        }
      });
###### Generate json object according to "make" schema:
    schema.makeOne();
#### Example:
<p align="center">
  <img src="example.gif" width="70%">
</p>


| Type  | optinal-setting |
| ------------- | ------------- |
| Make.Types.FirstName  | None  |
| Make.Types.LastName  | None  |
| Make.Types.Email  | String: provider(Email provider default is gmail)  |
| Make.Types.Password  | String: default(Default password, if not given a random 10 digit password will generated)  Boolean: toHash(If set to true uses bcrypt to hash the password)  |
| Make.Types.Price  | Int: upperLimit(The random price upper limit, 100 is the default)  |

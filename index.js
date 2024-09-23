// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
      };

//Find Users in the Central database
const databaseName = await central(id);
console.log(databaseName); 

//Get the user basic info
const basicInfo = await dbs[databaseName](id);
console.log(basicInfo);

//Access the vault to steal personal data
const personalData = await vault(id);
console.log(personalData);

//=============PART TWO - The Implementation================//
return{
    ...basicInfo, ...personalData
    }
}
const user = await getUserData(6)
console.log(user);


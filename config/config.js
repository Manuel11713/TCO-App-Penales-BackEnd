/////////////////////////
/////PUERTO APP /////////
/////////////////////////
process.env.PORT = process.env.PORT || 5000;

/////////////////////////
////777/ENTORNO /////////
/////////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // dev == local

//=====================
//=====BASE DATOS======
//=====================
let urlDB='';
// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/penalesDev'
// } else {
//     urlDB = 'mongodb+srv://Manuel117:H6n667sgelXmw7qP@cluster0-rhrav.mongodb.net/test?retryWrites=true&w=majorityy'; // Variables de entorno personalizadas de Heroku o en produccion'
// }
 process.env.URLDB = 'mongodb+srv://Manuel117:H6n667sgelXmw7qP@cluster0-rhrav.mongodb.net/test?retryWrites=true&w=majorityy';


//=====================
//=====SEMILLA JWT=====
//=====================
process.env.SEED_PROD = 'semillaDev';

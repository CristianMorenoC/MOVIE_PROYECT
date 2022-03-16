const { app } = require('./app');


const { sequelize } = require('./util/database');
const { initModels } = require('./util/initModels');


sequelize
    .authenticate()
    .then(()=> console.log('DB authenticated'))
    .catch((err)=> console.log(err));

// model relations
initModels();

sequelize
    .sync()
    .then(()=> console.log('DB synced'))
    .catch((err)=> console.log(err))

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App running on port: ${PORT}`);
});
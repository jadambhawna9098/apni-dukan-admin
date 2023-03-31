import { Sequelize } from "sequelize";
let sequelize=new Sequelize("apnidukan","root","9098995453",{
    host:"localhost",dialect:"mysql"
})
sequelize.authenticate().then(()=>{
    console.log("DataBase COnnected")
}).catch(err=>{
    console.log(err);
})

export default sequelize;
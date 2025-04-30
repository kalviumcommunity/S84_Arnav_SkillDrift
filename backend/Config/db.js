const {connect} =require('mongoose')

const connectToDb=async(url)=>{
    try{
        await connect(url)
        console.log('Successfully connected to Database')
    }catch(err){
        console.log('Error connecting to Database',err)
    }
}

module.exports=connectToDb
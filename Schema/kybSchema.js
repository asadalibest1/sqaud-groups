import mongoose from 'mongoose';

const KybSchema = new mongoose.Schema({
    CorporateName:{
        type:String,
        require:true,
    },
    ContactEmail:{
        type:String,
        require:true,
    },
    ContactNumber:{
        type:String,
        require:true,
    },
    CorporateAddress:{
        type:String,
        require:true,
    },
    SurnameCorporate:{
        type:String,
        require:true,
    },
    ContactCorporate :{
        type:String,
        require:true,
    },
    CompanyRegistration:{
        type:String,
        require:true,
    },
    CompanySelfie:{
        type:String,
        require:true,
    },
    Verified:{
        type:Boolean,
        default:false,
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})
export default mongoose.model('KybSchema',KybSchema)
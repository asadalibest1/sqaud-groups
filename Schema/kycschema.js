import mongoose from 'mongoose';

const KycSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        require:true,
    },
    LastName:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    MobileNumber:{
        type:String,
        require:true,
    },
    Contact:{
        type:String,
        require:true,
    },
    GovernmentDocuments:{
        type:String,
        require:true,
    },
    UploadSelfie:{
        type:String,
        require:true,
    },
    CertificateRights:{
        type:Boolean,
        require:true,
    },
    examplesWork:{
        type:Boolean,
        require:true,
    },
    UploadExamples:{
        type:Boolean,
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
export default mongoose.model('KycSchema',KycSchema)
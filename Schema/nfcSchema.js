import mongoose from 'mongoose';

const NfcSchema = new mongoose.Schema({
    CreationType:{
        type:String,
        require:true,
    },
    Draft:{
        type:Boolean,
        require:true,
        default:false
    },
    Archived:{
        type:Boolean,
        require:true,
        default:false
    },
    Title: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    CreationDate: {
        type: Date,
        require: true,
    },
    Author:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author',
    }],
    Owner:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Owner'
    }],
    Country:{
        type:String,
        require:true,
    },
    Materials:{
        type:String,
    },
    ExternalLink:{
        type:String,
        require:true,
    },
    Categories:{
        type:String,
        //require:true,
    },
    Blockchain:{
        type:String,
        //require:true,
    },
    MarketPlace:{
        type:String,
        //require:true,
    },
    WalletDestination:{
        type:String,
        //require:true,
    },
    Attribution:{
        type:String,
    },
    // Creators:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Creator'
    // }],
    // Reproduction:{
    //     type:Boolean,
    //     //require:true
    // },
    ReadingRules:{
        type:String,
        //require:true,
    },
    MetaRules:{
        type:String,
        //require:true,
    },
    GameRules:{
        type:String,
        //require:true,
    },
    PhysicalProduction:{
        type:String,
        //require:true,
    },
    QuantityRule:{
        type:String,
        //require:true,
    },
    Planned:{
        type:String,
    },
    Exception:{
        type:String,
    },
    Comments:{
        type:String,
        //require:true,
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
  
    // kyc:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'KycSchema',
    // },
    // kyb:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'KybSchema',
    // }
});
export default mongoose.model('NFC', NfcSchema);
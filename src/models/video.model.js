import mongoose,{Schema} from "momgoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema =new Schema({
    videoFile:{
        type:String, //cloudinary url
        required: true
    },
    thumbnail:{
        type:String, //cloudinary url
        required: true
    },
    title:{
        type:String, 
        required: true
    },
    description:{
        type:String, 
        required: true
    },
    duration:{
        type:Number, 
        required: true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Type.ObjectId,
        ref:"User"
    }







},{
    timestamps:true
}
)
videoSchema.plugins(mongooseAggregatePaginate)
export const Video=mongoose.model("Video", videoSchema)
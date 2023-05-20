import {connectDB} from "../../../utils/feature"
import {Task} from "../../../models/task"
import { asyncError, errorHandler } from "../../../middlewares/error";
const handler =asyncError(async(req,res)=>{
    
    if(req.method !=="POST") return errorHandler(res, 400, "Only Post Method allowed");

    
    await connectDB();

    const {title,description} = req.body;

await Task.create({

    title,
    description,
    user:"Asdasadjhkhkh",
});


    res.json({

success:true,
message:"task created",
});

});
export default handler;
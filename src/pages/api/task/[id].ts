import {checkAuth, connectDB} from "../../../../utils/feature"
import {Task} from "../../../../models/task";
import { asyncError, errorHandler } from "../../../../middlewares/error";
// import { User } from "../../../models/user";
const handler =asyncError(async(req,res)=>{
    

    await connectDB();
    const user = await checkAuth(req);
    if(!user) return errorHandler(res, 401, "Login First");
    
    const taskId=req.query.id;

const task = await Task.findById(taskId);
if(!task) return errorHandler(res, 404, "Task not found");

    if(req.method ==="PUT"){

 

task.isCompleted =!task.isCompleted;

await task.save();


res.status(200).json({

    success:true,
    message:"Task updated",
});
    } 
    else if(req.method ==="DELETE"){

await task.deleteOne();
res.status(200).json({

    success:true,
    message:"Task deleted",
    });


    } else{

      errorHandler(res, 400, "This method is not allowed");

    }
    
    // return errorHandler(res, 400, "Only PUT Method allowed");

//     res.json({

// success:true,
// tasks,
// });

});
export default handler;
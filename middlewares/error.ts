export const errorHandler =(res, 
    statusCode=500, 
    message="Internal Server Error")=>{
return res.status(statusCode).json({

        success:false,
        message,
        
            });

};

export const asyncError=(passdFunc)=>(req,res)=>{

return Promise.resolve(passdFunc(req,res)).catch((err)=>{

    return errorHandler(res, 500, err.message);
});

};
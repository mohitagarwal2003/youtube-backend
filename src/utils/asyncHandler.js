import { request } from "express";

const asyncHandler = (requestHandler) => {
  (re, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

// const asyncHandler = (fn) => async (req, res , next) => {
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             suucess:false,
//             message:err.message
//         })
//     }
// }

const express = require("express")
/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {*} next 
 */
const getTicket=async (req,res,next)=>{
    
    res.send("hello")
}

module.exports={
    getTicket
}
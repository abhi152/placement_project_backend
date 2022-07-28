const express = require("express");
require("mongoose")
const app = express();
const router=express.Router()

const Company=require("../models/company")

router.get("/",(req,res)=>{
    res.send("Hello")
})

router.post("/data",(req,res)=>{
    
    const data=req.body;
    console.log("hii")
    console.log(data)

    const Name=data.Name
    const Salary1718=data.Salary1718
    const N1718=data.N1718

    const Salary1819=data.Salary1819
    const N1819=data.N1819

    const Salary1920=data.Salary1920
    const N1920=data.N1920

    const Salary2021=data.Salary2021
    const N2021=data.N2021
    const company =new Company({
        Name,Salary1718,N1718,Salary1819,N1819,Salary1920,N1920,Salary2021,N2021
    })
     console.log(company)
    company.save().then((company)=>{
        console.log(company);
        res.status(200).json({"msg":"company saved"})
    }).catch((err)=>{
        console.log(err)
        res.status(404).json({"msg":"eroor"})
    })
    
})


router.get("/getalldata",(req,res)=>{
    Company.find().then((data)=>{
        res.json(data)
    })
    
})



module.exports=router
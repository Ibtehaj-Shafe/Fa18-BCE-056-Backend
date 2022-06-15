import contactmodel from "../model/contact.js";

export const getcontact= async(req,res)=>{
try {
const result=await contactmodel.find();
    res.json(result);
} catch (error) {
    console.log("Not found");
}
}

export const postcontact= async(req,res)=>{
try {
    const {name, num, email} = req.body;
    const response = await contactmodel.create({name,num,email}) 
    res.json(response);                      
} catch (error) {
    console.log("do not saved");
}
}

export const putcontact= async (req,res)=>{
try{
    const {id,name, num, email} = req.body;
    const isFound = await contactmodel.findById(id)
    if(isFound){
        const response = await contactmodel.findOneAndUpdate({_id:id}, {name,num,email}); 
        res.json(response); 
    }else{
        res.json({message: 'Invalid contact id'})
    }
    
}catch(e){
    res.json({message: 'error'});
}
}

export const deletecontact= async(req,res)=>{
    try{
        const isFound = await contactmodel.deleteOne({_id: req.params.id})
        res.json({message: 'Successfully Deleted'})
    }catch(e){
        res.json({message: 'Invalid Delete'});
    }
}

// getsinglecontact
export const getsinglecontact= async(req,res)=>{
    try {
    const result=await contactmodel.findByIdAndUpdate(req.params.id);
        res.json(result);
    } catch (error) {
        console.log("Not found");
    }
    }
    export const getsearchcontact= async(req,res)=>{
        try {
        const result=await contactmodel.find({name: { $regex: '.*' + req.params.name + '.*' } });
            res.json(result);
        } catch (error) {
            console.log("Contact Not found, Search result empty");
        }
    }

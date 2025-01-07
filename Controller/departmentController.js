const Departments = require('../model/Department');

const getAllDepartments = async(req,res) =>
{
    const departments = await Departments.find();
    if(!departments) return res.status(400).json({'message' : 'No departments found'});
    res.json(departments);
}

const addNewDepartment = async(req,res)=>
{   
    console.log(req.body);
    console.log("sahil")
    if(!req?.body?.id || !req?.body?.name || !req?.body?.description) 
        {
            return res.status(400).json({'message' : 'name and description are required'})
        }

       console.log(req.body);

       try{

        const existingDepartmentById = await Departments.findOne({ id: req.body.id });
        if (existingDepartmentById) {
          return res.status(400).json({ 'message': 'Department with this ID already exists' });
        }
    
        const existingDepartmentByName = await Departments.findOne({ name: req.body.name });
        if (existingDepartmentByName) {
          return res.status(400).json({ 'message': 'Department with this name already exists' });
        }
      

        const result = await Departments.create({
            id : req.body.id,
            name : req.body.name ,
            description : req.body.description
        })

        res.status(201).json(result); 
       }
       catch(err)
       {
            console.error(err);
       }
}


module.exports ={
    getAllDepartments , addNewDepartment

}

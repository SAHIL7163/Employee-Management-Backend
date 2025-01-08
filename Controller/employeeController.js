const Employees = require('../model/Employee');

const getAllEmployees = async(req,res) =>
{
    const employees = await Employees.find();
    if(!employees) return res.status(400).json({'message' : 'No employees found'});
    res.json(employees);
}

const addNewEmployee = async(req,res)=>
{
   
    if(!req?.body?.id || !req?.body?.name || !req?.body?.department || !req?.body?.address) 
        {
            return res.status(400).json({'message' : 'name,department and address are required'})
        }

        console.log(req.body);
         if (isNaN(req?.body?.id)) { 
            return res.status(400).json({ message: "ID must be a numerical value." });
        }
       try{    
           const existingEmployeeById = await Employees.findOne({ id: req.body.id });
           if (existingEmployeeById) {
              return res.status(400).json({ 'message': 'Employee with this ID already exists' });
            }
        
         
            const existingEmployeeByName = await Employees.findOne({ name: req.body.name });
            if (existingEmployeeByName) {
              return res.status(400).json({ 'message': 'Employee with this name already exists' });
            }
          
            const result = await Employees.create({
                id : req.body.id,
                name : req.body.name ,
                department : req.body.department,
                address : req.body.address
        })

        res.status(201).json(result); 
       }
       catch(err)
       {
            console.error(err);
       }
}


module.exports ={
    getAllEmployees , addNewEmployee

}

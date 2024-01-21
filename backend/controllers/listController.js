const List = require('../models/listSchema')


exports.createList = async(req, res) =>{
    const list = await List.create(req.body)

    res.status(201).json({
      success: true,
      list
    })
}

exports.getList = async(req, res) =>{
  const list = await List.find()

  if(!list){
    return res.status(500).json({
      status: "failed",
      message: "List not found"
    })
  }

  res.status(200).json({
    status: "success",
    list
  })
}

exports.deleteList = async(req,res) =>{
      const list = await List.findById(req.params.id)

      if(!list){
        return res.status(500).json({
          status: "failed",
          message: "List not found"
        })
      }

      await list.deleteOne();

      const newList = await List.find()

      res.status(200).json({
        success:true,
        list: newList
      })
}


exports.updateList = async(req,res)=>{
     let list = await List.findById(req.params.id)

     if(!list){
      return res.status(500).json({
        status: "failed",
        message: "List not found"
      })
    }
  
    list = await List.findByIdAndUpdate(req.params.id,req.body,{new:true,
      useFindAndModify:false,
      runValidators:true,})

    res.status(200).json({
      success:true,
      list
    })


     
}
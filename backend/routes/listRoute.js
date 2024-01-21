const {createList, getList, deleteList, updateList} = require('./../controllers/listController')
const express = require('express')
const router = express.Router()


router.route("/create").post(createList)
router.route("/list").get(getList)
router.route("/list/:id").delete(deleteList)
router.route("/list/:id").patch(updateList)

module.exports = router;
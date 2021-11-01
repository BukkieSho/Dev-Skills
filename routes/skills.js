import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

// all URL routes or home page
router.get("/", skillsCtrl.index)

//localhost:3000/new
router.get("/new", skillsCtrl.new)
router.get("/:id", skillsCtrl.show)

//localhost:3000/skills
router.post("/", skillsCtrl.create)

export {
  router
}

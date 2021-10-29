import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

/* GET skills/new */
router.get('/new', skillsCtrl.new)

export {
  router
}

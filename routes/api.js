const router = require('express').Router();
const apiController = require('../controllers/apiContoller');
const { upload } = require('../middlewares/multer');


router.get('/landingPage', apiController.landingPage);
router.get('/detailPage/:id', apiController.detailPage);
router.post('/bookingPage', upload, apiController.bookingPage);

module.exports = router;
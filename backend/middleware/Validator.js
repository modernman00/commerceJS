const { check, validationResult } = require('express-validator')

exports.checkSignup = [
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid email'),
    check('username')
        .not().isEmpty()
        .trim()
        .withMessage('All fields are required'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least six characters'),

]
// to check if the request is empty or has errors based on what I set up with checkSignup 
exports.showErrorSignUp =  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array()[0].msg });
  }
}

exports.checkLogin = [
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid email'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least six characters'),
]

exports.showErrorLogin =  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array()[0].msg });
  }
}



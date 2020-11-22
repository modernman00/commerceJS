const router = require('express').Router();
const { checkSignup, showErrorSignUp, checkLogin, showErrorLogin } = require('../middleware/Validator')
const { hashThePassword, compareHashPassword } = require('./../middleware/hashPass')
const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpire } = require("./../../config/keys")

let Signup = require('../model/Signup')

// route /user
router.route('/show').get((req, res) => {
    //call the User schema/ database
    Signup.find()
        .then(Signup => res.json(Signup))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});

// route /user
router.route('/show/:id').get((req, res) => {
    //call the User schema/ database
    Signup.findById(req.params.id)
        .then(Signup => res.json(Signup))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});

//read 

router.route('/find').post(async (req, res) => {
    try {
        await showErrorSignUp(req, res)
        const { email, password } = req.body

        const user = await Signup.findOne({ email })
        if (!user) {
            return res.status(400).json(
                { errors: `One of your credentials is invalid` })
        }

        const checkPassword = await compareHashPassword(password, user.password)
        if (!checkPassword) {
            return res.status(400).json({ errors: 'One of your credentials is invalid' })
        }

        const payload = {
            user: { _id: user._id }
        }

        jwt.sign(payload, jwtSecret,  { expiresIn: jwtExpire }, (err, token) => {
            if (err) console.log('jwt error:' + err)
            const { _id, username, email, role } = user
            res.json({
                token,
                user: { _id, username, email, role }
            })
        })



    } catch (err) {
        console.log("Login Error:" + err)
        res.status(500)
            .json({
                errors: "Sign in problem"
            })
    }

});



// route /user
router.route('/delete/:id').delete((req, res) => {
    //call the User schema/ database
    Signup.findByIdAndDelete(req.params.id)
        .then((exe) => res.json(`${exe.id} deleted`))
        .catch(err => res.status(400).json(`Error :  ${err}`))
});


// route /user UPDATE
router.route('/update/:id').post((req, res) => {
    //call the User schema/ database
    Signup.findById(req.params.id)
        .then((exe) => {
            exe.username = req.body.username
            exe.email = req.body.email;
            exe.password = req.body.password;

            exe.save()
                .then(() => res.json(`${exe.id} has been updated`))
                .catch((err) => res.json(`Error:  ${err}`))
        })
        .catch(err => res.status(400).json(`Error :  ${err}`))
});


// posting to the user collection

router.route('/create').post(checkSignup, (req, res, next) => {
    try {
        showErrorSignUp(req, res)
        const { username, email, password } = req.body

        Signup.findOne({ email }, (err, result) => {
            if (result) {
                return res.status(400).json(
                    { errors: `Your ${email} already exist` })
            } else {
                // hash the password
                const hashedPassword = hashThePassword(password)
                // instantiate the model Signup
                const newExe = new Signup({ username, email, password: hashedPassword });
                // save the entry to the model
                newExe.save()
                    .then(() => { res.json('new User added: ') })
                    .catch(err => {
                        return res.status(400).json({ errors: 'Error: we cannot add your detail' })
                        //console.log(err)
                    })
            }
        })


    } catch (e) {
        console.log(e)
    }

})


module.exports = router;
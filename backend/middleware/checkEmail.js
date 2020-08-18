
// exports.EmailAlreadyIn = (object, toFind, res) => {
//         const finder = object.findOne({ toFind })
//         if (finder) {
//         return res.status(400).json(
//         { errors: `${toFind} already exist` })
//         }
// }


exports.EmailAlreadyIn = (object, toFind, res) => {
       object.findOne({ toFind }, (err, result) => {
                if(err) console.log(err)
                // res.send(result)
                console.log(result + "is the email")
        })
        // if (finder) {
        // return res.status(400).json(
        // { errors: `${toFind} already exist` })
        // }
}



exports.checkEmail = (object, toFind, res) => {
        const finder = object.findOne({ toFind })
        if (!finder) {
                return res.status(400).json(
                        { errors: `Invalid credentials` })
        }
        return finder
}


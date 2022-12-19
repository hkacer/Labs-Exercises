const bcrypt=require('bcryptjs')
const users = []


module.exports = {
    login: (req, res) => {

      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const existing= bcrypt.compareSync(password,users[i].passwordHash)
        
        if (users[i].username === username && users[i].password === password) {

          let usernameToReturn={...users[i]}
          delete usernameToReturn.passwordHash
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {

      const {password, firstName,lastName,email}= req.body
      const salt=bcrypt.genSaltSync(5)

      const passwordHash=bcrypt.hashSync(password,salt)

        console.log('Registering User')
        console.log(req.body)

        let user= {
          passwordHash,
          firstName,
          lastName,
          email,
        }
        console.log(passwordHash)
       users.push(user)
        res.status(200).send(req.body)


        
    }
}
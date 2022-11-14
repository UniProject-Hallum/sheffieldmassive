import jwt from 'jsonwebtoken'

const handyAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          if (decodedToken.role !== "handyman") {
            return res.status(401).json({ message: "Not authorized" })
          } else {
            next()
          }
        }
      })
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" })
    }
  }

const customerAuth = (req, res, next) => {
    const token = req.cookies.jwt
    
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          if (decodedToken.role !== "customer") {
            return res.status(401).json({ message: "Not authorized" })
          } else {
            next()
          }
        }
      })
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" })
    }
  }


  export {handyAuth, customerAuth};
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Authorization header missing");
    }
    
    const token = authHeader.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Forbidden" });
  }
};


export default auth;

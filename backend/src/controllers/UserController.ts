import { Request, Response, response } from "express";
import { prisma } from "../database";

export default{
  async createUser(request: Request, response: Response){
    try{
      const { name, email} = request.body;
      const userExist = await prisma.user.findUnique({ where: { email }});
      if(userExist){
        return response.json({
          error: true,
          message: 'Error: user already exists!'
        });
      }

      const user = await prisma.user.create({
        data: {
          name,
          email
        }
      });
      return response.json({
        error: false,
        message: 'Success: successfully registered user!',
        user
      });
    }catch(error){
      return response.json({message: error.message});
    }
  }
}
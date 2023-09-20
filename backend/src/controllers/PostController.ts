import { Request, Response, response } from "express";
import { prisma } from "../database";

export default{
  async createPost(request: Request, response: Response){
    try{
      const { title, content, userId} = request.body;
      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId
        }
      });
      return response.json({
        error: false,
        message: 'Success, successfully registered post!',
        post
      });
    }catch(error){
      return response.json({message: error.message});
    }
  },

  async listPost(request: Request, response: Response){
    try{
      const { id } = request.params;
      const post = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!post){
        return response.json({
          error: true,
          message: 'Error, post not found!',

      });
    }

      return response.json({
        error: false,
        post
      });
    }catch(error){
      return response.json({message: error.message});
    }
  },

  async updatePost(request: Request, response: Response){
    try{
      const { id, title, content} = request.body;
      const postExist = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!postExist){
        return response.json({
          error: true,
          message: 'Error, post not found!',

      });
    }

    const post = await prisma.post.update({
      where:{
        id: Number(request.body.id)},
        data: {
          title,
          content
        }
    });
      return response.json({
        error: false,
        message: 'successfully updated post!',
        post
      });
    }catch(error){
      return response.json({message: error.message});
    }
  },

  async deletePost(request: Request, response: Response){
    try{
      const { id } = request.params;
      const postExist = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!postExist){
        return response.json({
          error: true,
          message: 'Error, post not found!',

      });
    }

    const post = await prisma.post.delete(
      {
        where: {
          id: Number(request.params.id)
        },
      }
    );
      return response.json({
        error: false,
        message: 'successfully deleted post!',
        post
      });
    }catch(error){
      return response.json({message: error.message});
    }
  },
}
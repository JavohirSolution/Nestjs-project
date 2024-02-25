import { Injectable } from '@nestjs/common';
import { Blog } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDocument } from './blog.schema';

@Injectable()
export class BlogService {
    blogs: Blog[];

    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {
       
    };
    async getAllBlog() {
        return this.blogModel.find({})
    }

    async create(dto: Blog) {
        return this.blogModel.create(dto)
    }
    async getById(id: string) {
        return this.blogModel.findById(id)
    }
    async update(dto: Blog, id: string) {
        return this.blogModel.findByIdAndUpdate(id, dto, { new: true })
    }
    async delete(id: string) {
        return this.blogModel.findByIdAndDelete(id)
    }
}

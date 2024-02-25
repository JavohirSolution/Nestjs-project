import { Controller, HttpCode, Get, Post, Body, Param, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { Blog } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {

    }

    @HttpCode(200)
    @Get()
    async getAll() {
        return this.blogService.getAllBlog();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() dto: Blog) {
        return this.blogService.create(dto)
    }


    @HttpCode(200)
    @Get(":id")
    async getById(@Param("id") id: string) {
        return this.blogService.getById(id)
    }

    @HttpCode(200)
    @Patch(":id")
    async update(@Param("id") id: string, @Body() dto: Blog) {
        return this.blogService.update(dto, id);
    }

    @HttpCode(200)
    @Delete(":id")
    async delete(@Param("id") id: string) {
        return this.blogService.delete(id)
    }

}

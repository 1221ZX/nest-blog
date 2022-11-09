import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';
import { IsNotEmpty } from 'class-validator'

// 数据传输对象
// 标识创建帖子的数据
class CreatePostDto {
  @ApiProperty({
    description: "帖子标题"
  })
  @IsNotEmpty({
    message:"请填写标题"
  })
  title: String

  @ApiProperty({
    description: "帖子内容"
  })
  @IsNotEmpty({
    message:"请填写标题"
  })
  content: String
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {

  @ApiOperation({
    summary: "帖子列表"
  })
  @Get()
  async index() {
    return await PostModel.find()
  }

  @ApiOperation({
    summary: "创建帖子"
  })
  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    await PostModel.create(createPostDto)
    return {
      messgae: '创建帖子成功'
    }
  }

  @Get(':id')
  @ApiOperation({
    summary: "帖子详情"
  })
  async detail(@Param('id') id: string) {
    return await PostModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({
    summary: '编辑帖子'
  })
  async update(@Body() createPostDto: CreatePostDto, @Param('id') id: string) {
    await PostModel.findByIdAndUpdate(id, createPostDto)
    return {
      message: "编辑帖子成功"
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: '删除帖子'
  })
  async delete(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id)
    return {
      message: '删除帖子成功'
    }
  }
}




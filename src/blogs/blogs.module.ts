import { Module } from '@nestjs/common';
import { BlogsController } from './controllers/blogs/blogs.controller';
import { BlogsService } from './services/blogs/blogs.service';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}

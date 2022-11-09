import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('首页')
export class AppController {
  @Get()
  index(): string {
    return 'index'
  }
}

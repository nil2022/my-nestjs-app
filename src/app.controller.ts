import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/')
export class AppController {
  @Get()
  getHomePage(@Req() req: Request) {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toLocaleString();
    console.log(`${protocol}://${host}${url} ${method} ${date}`);
    return 'Welcome to Home Page of Book Store App';
  }
}

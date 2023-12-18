import { Controller, Get } from '@nestjs/common';

@Controller('book/api/v1')
export class AppController {
  @Get('home')
  getHomePage() {
    return 'This is Welcome page for Book Store 📖';
  }
}

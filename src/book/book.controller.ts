import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book/api/v1')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('addbook')
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get('getbooks')
  async findAll() {
    return this.bookService.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  //inject book service
  constructor(
    @InjectRepository(Book) private readonly bookService: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book: Book = new Book();
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    book.published = createBookDto.published;
    return this.bookService.save(book);
  }
  async findAll(): Promise<Book[]> {
    return this.bookService.find();
  }
}

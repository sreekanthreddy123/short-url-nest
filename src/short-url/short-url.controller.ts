import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateShortUrlDto } from './dto';

@Controller('links')
export class ShortUrlController {
  @Post()
  create(@Body() createShortUrlDto: CreateShortUrlDto) {
    return 'This action adds a new short-url';
  }

  @Get()
  findAll(@Query() query: CreateShortUrlDto[]) {
    return `This action returns all short-url (limit: ${query.length} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} short-url`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateShortUrlDto: CreateShortUrlDto) {
    return `This action updates a #${id} short-url`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} short-url`;
  }
}
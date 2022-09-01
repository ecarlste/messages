import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Post()
  createMessage(@Body() body) {
    console.log(body);
  }

  @Get()
  listMessages() {
    console.log('list messages');
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}

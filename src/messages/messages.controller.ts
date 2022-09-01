import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from 'dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
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

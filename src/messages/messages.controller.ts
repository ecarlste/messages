import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from 'dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

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

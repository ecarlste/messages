import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto.content);
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}

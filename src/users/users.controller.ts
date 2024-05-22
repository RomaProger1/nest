import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary:'Создание пользователя'})
  @ApiResponse({status:200,type:User})
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @ApiOperation({summary:'Получить всех пользователей'})
  @ApiResponse({status:200,type:[User]})
  @Get()
  async findAll() {
    return this.usersService.findAllUsers();
  }
}

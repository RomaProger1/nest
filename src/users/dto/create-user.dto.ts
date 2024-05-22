import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
  @ApiProperty({example:'username@mail.ru',description:'Почта'})
    email: string;
    @ApiProperty({example:'123asdas321',description:'Пароль'})
    password: string;
  }
  
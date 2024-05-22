import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import { Table, Column,BelongsToMany, Model, DataType } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import {UserRoles} from "src/roles/roles.user-roles";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'User' })
export class User extends Model<User, UserCreationAttrs> { // Дженерики
  @ApiProperty({example:'1',description:'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({example:'username@gmail.ru',description:'Майл'})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @ApiProperty({example:'asd213asd',description:'Пароль'})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @ApiProperty({example:'true',description:'Забанен или нет'})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;
  @ApiProperty({example:'За хулиганство',description:'Причина блокировки'})
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @BelongsToMany(()=>Role,()=>UserRoles)
  roles: Role[];

  
}

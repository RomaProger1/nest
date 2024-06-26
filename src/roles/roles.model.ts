import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "src/roles/roles.user-roles";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли '})
    @Column({type: DataType.STRING})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataType.STRING})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
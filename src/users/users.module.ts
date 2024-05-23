import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeMethod } from 'sequelize/types/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { RolesModule } from '../roles/roles.module';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/roles.user-roles';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(()=> AuthModule)
  ],
  exports:[UsersService
  ]
})
export class UsersModule {}

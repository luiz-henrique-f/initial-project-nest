import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dto/create-team-member-dto';
// import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    console.log(memberFunction);
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name: name,
        function: memberFunction,
      },
    });
    // await this.rocketMembersRepository.create(name, memberFunction);
  }
}

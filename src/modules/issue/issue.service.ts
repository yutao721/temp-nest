import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class IssueService {
  constructor(private readonly PrismaService: PrismaService) { }
  create(createIssueDto: CreateIssueDto) {
    return this.PrismaService.issue.create({
      data: createIssueDto,
    });
  }

  findAll() {
    return this.PrismaService.issue.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findDetail() {
    const list = await this.PrismaService.issue.findMany();
    let total = 0, done = 0, unDone = 0;
    if (list.length) {
      total = list.length;
      unDone = list.filter(item => !item.status)?.length;
      done = list.filter(item => item.status)?.length;
    }
    return {
      total: total,
      done: done,
      unDone: unDone
    }
  }

  findOne(id: number) {
    return this.PrismaService.issue.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return this.PrismaService.issue.update({
      where: {
        id,
      },
      data: updateIssueDto,
    });
  }

  remove(id: number) {
    return this.PrismaService.issue.delete({
      where: {
        id,
      },
    });
  }

  modifyStatus(id: number, { status }: { status: number }) {
    return this.PrismaService.issue.update({
      where: {
        id,
      },
      data: { status },
    });
  }
}

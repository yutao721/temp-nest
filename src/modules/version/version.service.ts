import { Injectable } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class VersionService {
  constructor(private readonly PrismaService: PrismaService) { }
  create(createVersionDto: CreateVersionDto) {
    let { startTime, testTime, completeTime } = createVersionDto;
    startTime = startTime !== undefined ? new Date(startTime) : null;
    testTime = testTime !== undefined ? new Date(testTime) : null;
    completeTime = completeTime !== undefined ? new Date(completeTime) : null;
    createVersionDto = {
      ...createVersionDto,
      startTime,
      testTime,
      completeTime,
    };
    return this.PrismaService.version.create({
      data: createVersionDto,
    });
  }

  findAll() {
    return this.PrismaService.version.findMany({
      orderBy: {
        id: 'desc'
      }
    });
  }

  findOne(id: number) {
    return this.PrismaService.version.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateVersionDto: UpdateVersionDto) {
    let { startTime, testTime, completeTime } = updateVersionDto;
    startTime = startTime !== undefined ? new Date(startTime) : null;
    testTime = testTime !== undefined ? new Date(testTime) : null;
    completeTime = completeTime !== undefined ? new Date(completeTime) : null;
    updateVersionDto = {
      ...updateVersionDto,
      startTime,
      testTime,
      completeTime,
    };
    return this.PrismaService.version.update({
      where: {
        id,
      },
      data: updateVersionDto,
    });
  }

  remove(id: number) {
    return this.PrismaService.version.delete({
      where: {
        id,
      },
    });
  }
}

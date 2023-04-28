import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createCollectionDto: CreateCollectionDto) {
    return this.PrismaService.collection.create({
      data: createCollectionDto,
    });
  }

  findAll({ type, page }: { type?: number; page: number }) {
    return this.PrismaService.collection.findMany({
      orderBy: {
        id: 'desc',
      },
      where: {
        type: type
          ? {
              equals: type,
            }
          : undefined,
      },
    });
  }

  findOne(id: number) {
    return this.PrismaService.collection.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.PrismaService.collection.update({
      where: {
        id,
      },
      data: updateCollectionDto,
    });
  }

  remove(id: number) {
    return this.PrismaService.collection.delete({
      where: {
        id,
      },
    });
  }
}

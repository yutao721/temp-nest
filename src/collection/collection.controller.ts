import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';

@Controller('collection')
@ApiTags('域名集合')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  @ApiOperation({ summary: '新增域名集合' })
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.create(createCollectionDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有域名集合' })
  @ApiQuery({
    name: 'type',
    description: '1测试 2正式 ',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    type: Number,
    required: false,
  })
  findAll(@Query('type') type?: string, @Query('page') page?: string) {
    return this.collectionService.findAll({ type: +type, page: +page });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取某个域名集合详情' })
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: '修改某个域名集合' })
  update(
    @Param('id') id: string,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionService.update(+id, updateCollectionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除某个域名集合' })
  remove(@Param('id') id: string) {
    return this.collectionService.remove(+id);
  }
}

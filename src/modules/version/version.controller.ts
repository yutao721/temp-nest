import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VersionService } from './version.service';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('version')
@ApiTags('版本管理')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post()
  @ApiOperation({ summary: '新增版本' })
  create(@Body() createVersionDto: CreateVersionDto) {
    return this.versionService.create(createVersionDto);
  }

  @Get()
  @ApiOperation({ summary: '获取版本列表' })
  findAll() {
    return this.versionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取版本详情' })
  findOne(@Param('id') id: string) {
    return this.versionService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新版本' })
  update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
    return this.versionService.update(+id, updateVersionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除版本' })
  remove(@Param('id') id: string) {
    return this.versionService.remove(+id);
  }
}

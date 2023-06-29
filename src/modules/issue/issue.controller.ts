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
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('问题')
@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) { }

  @Post()
  @ApiOperation({ summary: '创建问题' })
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issueService.create(createIssueDto);
  }

  @Get()
  @ApiOperation({ summary: '问题列表' })
  findAll() {
    return this.issueService.findAll();
  }


  // @Get(':id')
  // @ApiOperation({ summary: '问题详情' })
  // findOne(@Param('id') id: string) {
  //   return this.issueService.findOne(+id);
  // }

  @Get('issueDetail')
  @ApiOperation({ summary: '问题详情的' })
  findDetail() {
    return this.issueService.findDetail();
  }

  @Put(':id')
  @ApiOperation({ summary: '更新问题详情' })
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(+id, updateIssueDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除问题' })
  remove(@Param('id') id: string) {
    return this.issueService.remove(+id);
  }

  @Post('modifyStatus/:id')
  @ApiOperation({ summary: '修改issue状态' })
  @ApiBody({
    schema: {
      type: 'object',
      example: {
        status: 2
      }
    }
  })
  modifyStatus(@Param('id') id: string, @Body() { status }: { status: number }) {
    return this.issueService.modifyStatus(+id, { status });
  }
}

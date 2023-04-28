import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  isDate,
} from 'class-validator';
export class CreateVersionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '版本名称', example: '4.7.2版本' })
  name: string;

  @IsString()
  @ApiProperty({ description: '版本描述', example: '版本描述' })
  description?: string;

  @IsString()
  @ApiProperty({ description: '备注信息', example: '备注信息' })
  mark?: string;

  @IsString()
  @ApiProperty({ description: 'UI', example: 'www.baidu.com' })
  uiSrc?: string;

  @IsString()
  @ApiProperty({ description: '测试用例', example: 'www.baidu.com' })
  testCaseSrc?: string;

  @IsString()
  @ApiProperty({ description: '需求文档', example: 'www.baidu.com' })
  productSrc?: string;

  @IsNumber()
  @ApiProperty({ description: '是否完成', example: 1 })
  isDone: number;

  @IsNumber()
  @ApiProperty({ description: '是否逾期', example: 0 })
  isOverdue?: number;

  @IsString()
  @ApiProperty({ description: '版本开始时间', example: new Date() })
  startTime?: Date;

  @IsString()
  @ApiProperty({ description: '提测时间', example: new Date() })
  testTime?: Date;

  @IsString()
  @ApiProperty({ description: '完成时间', example: new Date() })
  completeTime?: Date;
}

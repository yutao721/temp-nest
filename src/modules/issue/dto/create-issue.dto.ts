import {
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIssueDto {
  @ApiProperty({ description: '问题描述', example: '问题描述' })
  @IsString()
  content: string;

  @ApiProperty({ description: '状态', example: 1 })
  @IsNumber()
  status?: number;

  @ApiProperty({ description: '问题类型', example: 1 })
  @IsNumber()
  questionType?: number;

  @ApiProperty({ description: '涉及平台', example: 1 })
  @IsNumber()
  platformType?: number;
}

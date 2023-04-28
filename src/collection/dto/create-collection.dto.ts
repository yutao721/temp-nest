import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
export class CreateCollectionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '名称', example: '新物集官网' })
  name?: string;

  @IsString()
  @ApiProperty({ description: '打开地址', example: 'www.baidu.com' })
  openUrl?: string;

  @IsString()
  @ApiProperty({ description: '备注', example: '备注信息' })
  content?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '描述', example: '新物集官网的描述' })
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '是否启用', example: 1, enum: [1, 0] })
  isSetup: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '类型', example: 1, enum: [1, 2, 3, 4] })
  type: number;
}

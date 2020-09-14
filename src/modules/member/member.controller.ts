import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberDto } from './member.dto';
import { ObjectID } from 'typeorm';

@Controller("member")
export class MemberController {
  constructor(private readonly memberService: MemberService) {
  }

  @Get()
  findAll(){
    return this.memberService.findAll();
  }

  @Post()
  addMember(@Body() memberDto: MemberDto){
      return this.memberService.save(memberDto);
  }

  @Put(":id")
  updateMember(@Param('id') id: ObjectID, @Body() memberDto: MemberDto) {
    return this.memberService.update(id, memberDto);
  }

  @Delete(":id")
  deleteMember(@Param("id") id: ObjectID) {
    return this.memberService.delete(id);
  }
}
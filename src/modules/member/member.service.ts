import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { Member } from './member.entity';
import { Injectable } from '@nestjs/common';
import { MemberDto } from './member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {
  }

  async findAll() {
    return await this.memberRepository.find();
  }

  async save(member: MemberDto): Promise<MemberDto> {
    return await this.memberRepository.save(member);
  }

  async update(id: ObjectID, member: MemberDto) {
    return await this.memberRepository.update(id, member);
  }

  async delete(id: ObjectID) {
    return await this.memberRepository.delete(id);
  }
}
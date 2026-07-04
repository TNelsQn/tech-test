import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { User, UsersSchema } from './customer-data.schema';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    const dataPath = join(process.cwd(), 'data.json');
    const users: unknown = JSON.parse(readFileSync(dataPath, 'utf8'));
    this.users = UsersSchema.parse(users);
  }

  findById(userId: string): User | undefined {
    return this.users.find((user) => user.id === userId);
  }
}

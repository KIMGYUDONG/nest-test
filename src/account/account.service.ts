import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/account.entity';

@Injectable()
export class AccountService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {

    }

    getAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    getOneById(id: number): Promise<User> {
        return this.usersRepository.findOneOrFail(id);
    }

    createUser(user: User): Promise<User> {
        const newUser = this.usersRepository.create(user);

        return this.usersRepository.save(newUser);
    }

    async updateUser(id: number, name: string): Promise<User> {
        const user = await this.getOneById(id);

        user.name = name;

        return this.usersRepository.save(user);
    }

    async deleteUser(id:number): Promise<User> {
        const user = await this.getOneById(id);

        return this.usersRepository.remove(user);

    }
}

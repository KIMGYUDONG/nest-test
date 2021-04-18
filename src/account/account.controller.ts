import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { User } from './entity/account.entity';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.accountService.getAll();
    }
}

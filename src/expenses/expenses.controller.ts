import { Controller, Post, Get, Body } from '@nestjs/common';
import { Expense} from "./expense.entity";

@Controller('expenses')
export class ExpensesController {

    @Get()
    listAll(): any /*Promise<Expense[]>*/ {
        // service. findall
        return "";
    }
}

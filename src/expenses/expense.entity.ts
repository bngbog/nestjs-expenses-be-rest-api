import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: Date;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    comment: string;
}

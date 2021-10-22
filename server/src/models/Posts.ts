import { BaseEntity, Column, CreateDateColumn, 
    Entity, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity({name: "posts"})
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() title: string;
    @Column() content: string;
    @Column() published: boolean;
    @Column() date: string;
    @CreateDateColumn() created: Date;
    @UpdateDateColumn() updated: Date;
};






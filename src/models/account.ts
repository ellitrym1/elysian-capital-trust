import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import Wallet from "./wallet";

@Table({
    timestamps: true,
    tableName: "accounts",
    modelName: "Account",
})
export default class Account extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    accountId!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    registrationNumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    phoneNumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    dateOfBirth!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address!: string;

    @HasMany(() => Wallet)
    wallets!: Wallet[];
}

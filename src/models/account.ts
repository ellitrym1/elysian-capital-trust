import {
    Table,
    Column,
    DataType,
    Model,
    HasMany,
    AfterCreate,
} from "sequelize-typescript";
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
        type: DataType.NUMBER,
        allowNull: false,
    })
    pinCode!: number;

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

    @AfterCreate
    static async afterCreateAccountHook(account: Account) {
        const primaryWallet = await Wallet.create({
            accountId: account.accountId,
            walletType: "primary",
        });

        await account.$add("wallet", primaryWallet);
    }
}

import {
    Table,
    Column,
    DataType,
    Model,
    ForeignKey,
    HasMany,
    HasOne,
} from "sequelize-typescript";
import Account from "./account";
import Transaction from "./transaction";
import Balance from "./balance";

@Table({
    timestamps: true,
    tableName: "wallets",
    modelName: "Wallet",
})
export default class Wallet extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    walletId!: number;

    @ForeignKey(() => Account)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    accountId!: number;

    @HasOne(() => Balance)
    balance!: Balance;

    @HasMany(() => Transaction)
    transactions!: Transaction[];
}

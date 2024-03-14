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

enum WalletType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

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

    @Column({
        type: DataType.ENUM(...Object.values(WalletType)),
        allowNull: false,
        defaultValue: WalletType.SECONDARY,
    })
    walletType!: WalletType;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    })
    balance!: number;

    @HasMany(() => Transaction)
    transactions!: Transaction[];
}

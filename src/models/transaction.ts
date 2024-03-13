import {
    Table,
    Column,
    DataType,
    Model,
    ForeignKey,
} from "sequelize-typescript";
import Wallet from "./wallet";

@Table({
    timestamps: true,
    tableName: "transactions",
    modelName: "Transaction",
})
export default class Transaction extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    transactionId!: number;

    @ForeignKey(() => Wallet)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    fromWalletId!: number;

    @ForeignKey(() => Wallet)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    toWalletId!: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    amount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description!: string | null;
}

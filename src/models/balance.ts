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
    tableName: "balances",
    modelName: "Balance",
})
export default class Balance extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    balanceId!: number;

    @ForeignKey(() => Wallet)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    walletId!: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    })
    amount!: number;
}

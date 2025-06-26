"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var Operator_1 = require("./Operator");
var Schedule_1 = require("./Schedule");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.UUID,
            primaryKey: true,
            defaultValue: sequelize_typescript_1.DataType.UUIDV4
        })
    ], User.prototype, "id");
    __decorate([
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.STRING(255),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        })
    ], User.prototype, "email");
    __decorate([
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.TEXT,
            allowNull: false
        })
    ], User.prototype, "password_hash");
    __decorate([
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.STRING(50),
            allowNull: false,
            validate: {
                isIn: [['admin', 'manager', 'operator']]
            }
        })
    ], User.prototype, "role");
    __decorate([
        sequelize_typescript_1.Column({
            type: sequelize_typescript_1.DataType.BOOLEAN,
            defaultValue: true
        })
    ], User.prototype, "is_active");
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], User.prototype, "last_login");
    __decorate([
        sequelize_typescript_1.HasMany(function () { return Operator_1.Operator; })
    ], User.prototype, "operators");
    __decorate([
        sequelize_typescript_1.HasMany(function () { return Schedule_1.Schedule; })
    ], User.prototype, "schedules");
    User = __decorate([
        sequelize_typescript_1.Table({
            tableName: 'users',
            timestamps: true,
            paranoid: true
        })
    ], User);
    return User;
}(sequelize_typescript_1.Model));
exports.User = User;

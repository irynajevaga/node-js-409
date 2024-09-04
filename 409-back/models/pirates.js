import { DataTypes } from 'sequelize' // Класс с типами данных
import sequelize from '../config/db.js'

// Определяем таблицу
// Определяем тип данных
// Определяем взаимоотношения таблиц (один-один, один-ко-многим, многие-ко-многим)

// Определить модель
const Pirates = sequelize.define('Pirates', {
    // Определение столбцом
    name: {
        type: DataTypes.STRING, // Тип данных
        allowNull: false       // Обязательное для заполнения
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true          // Уникальное значение
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updateAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

export default Pirates;
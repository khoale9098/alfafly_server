import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dayjs from 'dayjs'
import { Model, raw } from 'objection'
import BaseModel from './BaseModel'

class User extends BaseModel {
  id!: number
  email!: string
  username?: string
  password!: string

  // Table name is the only required property.
  static tableName = 'user'

  static modifiers = {
    ...BaseModel.modifiers,
    defaultSelects(query) {
      const { ref } = User
      query.select(
        ref('id'),
        ref('fullName'),
        ref('nickname'),
        ref('avatar'),
        ref('userType'),
        ref('role'),
        ref('isPremium'),
        ref('weight'),
        ref('height'),
        ref('birthday'),
        ref('title')
      )
    },
    onlyParticipants(builder, id) {
      const { ref } = User
      builder.where(ref('id'), '!=', id)
    },
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1, maxLength: 512 },
        username: { type: 'string' },
        password: { type: 'string' },
        nickname: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        phone: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        fullName: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
        birthday: { type: 'date' },
        gender: { type: ['string', 'null'], maxLength: 32 },
        introduction: { type: ['string', 'null'] },
        title: { type: ['string', 'null'] },
      },
    }
  }
}

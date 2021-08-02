import { Model, Pojo } from 'objection'
import omit from 'lodash/omit'

class BaseModel extends Model {
  created?: Date
  updated?: Date

  deleted?: Date // for soft delete

  static get modelPaths(): string[] {
    return [__dirname]
  }

  get $secureFields(): string[] {
    return []
  }

  static modifiers = {
    defaultSoftDelete(query) {
      query.whereNull('deleted')
    },
  }

  async softDelete() {
    return await this.$query().patchAndFetch({
      deleted: new Date(),
    })
  }

  // omit stuff when creating json response from model
  $formatJson(json: Pojo): Pojo {
    json = super.$formatJson(json)
    return omit(json, this.$secureFields)
  }

  $beforeInsert(): void {
    const currentTime = new Date()
    this.created = currentTime
    this.updated = currentTime
  }

  $beforeUpdate(): void {
    delete this.created
    delete this.updated
    this.updated = new Date()
  }
}

export default BaseModel

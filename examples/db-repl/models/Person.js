const { BaseModel, Model } = require('./BaseModel');

class Person extends BaseModel {
  static get tableName() {
    return 'persons';
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: 'Post',
        join: {
          from: 'persons.id',
          to: 'posts.author_id'
        }
      },
      //
    };
  }
}

module.exports = Person;

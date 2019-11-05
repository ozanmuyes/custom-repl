const { BaseModel, Model } = require('./BaseModel');

class Post extends BaseModel {
  static get tableName() {
    return 'posts';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'Person',
        join: {
          from: 'posts.author_id',
          to: 'persons.id'
        }
      },
      //
    };
  }
}

module.exports = Post;

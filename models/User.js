const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        userName: {
          type: String
        },
        email: {
          type: String,
          unique: true,
          match: [/.+@.+\..+/]
        },
        thoughts: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
          }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
              }
        ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
    }
  );


  // get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;
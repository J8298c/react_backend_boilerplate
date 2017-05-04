/**
 * Created by juliomojica on 5/3/17.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   }
});

const User = mongoose.model('User', userSchema);

mongoose.connect('put your db addr here');

module.exports = User;
/**
 * Created by victor on 17/07/15.
 */
/*var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var findOrCreate = require('mongoose-findorcreate');*/

module.exports = function(){

  /*  var schema = mongoose.Schema({
        fullname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            index: {
                unique: true
            },
            validate: [validators.isEmail({message: 'Email inválido'})]
        },
        password: {
            type: String,
            required: true,
            validate: [validators.isAlphanumeric({message: 'Apenas letras e números'})]
        }
    });

    schema.pre('save', function(next) {
        var user = this;

        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);

            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);

                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });

    schema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };

    schema.plugin(findOrCreate);

    return mongoose.model('User', schema);*/
};

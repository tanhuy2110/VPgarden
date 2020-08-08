module.exports = {
    // Khi DB trả về nhiều dữ liệu
    mutipleMongooseToObj: function(mongooseArrs) {
        return mongooseArrs.map(mongooseArr => mongooseArr.toObject());
    },

    // Khi DB trả về chỉ có 1 row
    mongooseToObject: function( mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}
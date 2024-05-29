const mongoose = require("mongoose");
console.log("process.env.MONGO_URI", process.env.MONGO_URI);

module.exports.connect = async () => {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(console.log(`Database connected!`));
};
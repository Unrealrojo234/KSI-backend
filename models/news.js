const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema(
    {
        title:{
            type:'String',
            required:[true,"Please Write DOwn the News Title"]
        },
        date:{
            type:'String',
            required:true
        },
        image:{
            type:'String',
            required:false
        },
        info:{
            type:'String',
            required:true
        }
    },
    {
        timestamps:true
    }
)

const News = mongoose.model("News'",NewsSchema);
module.exports = News;
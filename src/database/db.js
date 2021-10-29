const mongoose = require('mongoose')

function connect() {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedToplopy', true)

    mongoose.connect('mongodb+srv://api-restful:Cleidiana1.@cluster0.nu18d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    
    const db = mongoose.connection

    db.once('open', () => {
        console.log ('Connected to database!')
    })

    db.once('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}


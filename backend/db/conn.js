// connect to db
import mongoose from 'mongoose'

export const conn = async () => {

    try {

       await mongoose.connect(process.env.DB_CONN)
            .then(() => console.log('Connected! to database'));


    } catch (error) {

        console.log('Error:', error)

    }



}
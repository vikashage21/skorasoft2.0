import mongoose from 'mongoose';
import Admin from '../models/Admin.js'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://vk220783_db_user:uDwIa7GrcQOo0k0J@cluster0.jzfvm1l.mongodb.net/");

const seedAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({ username: "admin" });
    if (!adminExists) {
      const admin = new Admin({ username: "admin", password: "12345" });
      await admin.save();
      console.log("Admin created");
    } else {
      console.log("Admin already exists");
    }
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedAdmin();

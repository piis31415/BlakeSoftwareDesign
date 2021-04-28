import { Document, NativeError } from "mongoose";
import { mongoose } from "./mongodb";
import { ReturnMessage } from "../util";

enum UserRole {
  Admin,
  Teacher,
  Student,
  None
}

const userSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  role: {type: UserRole, unique: false, required: true}
});
const UserModel = mongoose.model('User', userSchema);

/**
 * This function allows people with permissions
 * to add new users to the system
 * @param {String} name The user's name
 * @param {String} email User's google email
 * @param {UserRole} role The role of the user (Admin, Teacher, or Student)
 * @returns {UserAddError}
 */
async function addUser(name: String, email: String, role: UserRole): Promise<ReturnMessage> {
  if (name == null || email == null) return {error: true, msg: "Cannot create null user"};
  if (await checkUserExists(email)) return {error: true, msg: "User already exists"};
  // creates a new mongodb user document
  const doc = new UserModel({
    name,
    email: email.toLowerCase(),
    role
  });
  await doc.save();
  return {error: false, msg: "Success"};
}

/**
 * Checks if the user has a valid email for learningworks
 * @param {string} email User's google email
 * @returns {boolean} Whether the user exists
 */
async function checkUserExists(email: String): Promise<boolean> {
  if (email == null) return false;
  // Since email accounts will be unique
  // that can be used in the find function.
  const user = await UserModel.findOne({ email: email.toLowerCase() });
  if (user == null) return false;
  return true;
}

export {
  UserModel,
  UserRole,
  ReturnMessage,
  addUser,
  checkUserExists
}
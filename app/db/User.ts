import { NativeError } from "mongoose";
import { mongoose } from "./mongoDB";

enum UserRole {
  Admin,
  Teacher,
  Student,
  None
}

/**
 * This Will be returned
 */
enum UserAddCode {
  "Cannot create null user",
  "User already exists",
  Success
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: UserRole
});
const userModel = mongoose.model('User',userSchema);

/**
 * This function allows people with permissions
 * to add new users to the system
 * @param {String} name The user's name
 * @param {String} email User's google email
 * @param {UserRole} role The role of the user (Admin, Teacher, or Student)
 * @returns {UserAddError}
 */
async function addUser(name: String, email: String, role: UserRole) {
  if (name == null || email == null) return UserAddCode["Cannot create null user"];
  if (checkUserExists(email)) return UserAddCode["User already exists"];
  // creates a new mongodb user document
  const user = new userModel({
    name,
    email,
    role
  });
  user.save((err: NativeError, doc: Document<any, {}>) => {
    // error checking
    console.error('err:', err);
  });
}

/**
 * Checks if the user has a valid email for learningworks
 * @param {string} email User's google email
 * @returns {boolean} Whether the user exists
 */
function checkUserExists(email: String) {
  if (email == null) return;
  // Since email accounts will be unique
  // that can be used in the find function.
  // Consider using googleId's as well?
  return true
}

export {
  userModel
}
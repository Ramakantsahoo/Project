const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Admin Schema
const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Department Schema
const departmentSchema = new Schema({
  name: { type: String, required: true, unique: true },
  employeeCount: { type: Number, required: true },
});

// Staff Schema
const staffSchema = new Schema({
  name: { type: String, required: true },
  status: {type: Boolean, required: true},
  department: { type: String, required: true },
  internalNumber: { type: String, required: true },
  password: { type: String, required: true },
});

// Models
const Admin = mongoose.model('Admin', adminSchema);
const Department = mongoose.model('Department', departmentSchema);
const Staff = mongoose.model('Staff', staffSchema);

module.exports = {
  Admin,
  Department,
  Staff,
};

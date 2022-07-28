const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Salary1718: {
    type: String,
    default: 0,
  },
  N1718: {
    type: String,
    default: 0,
  },
  Salary1819: {
    type: String,
    default: 0,
  },
  N1819: {
    type: String,
    default: 0,
  }, Salary1920: {
    type: String,
    default: 0,
  },
  N1920: {
    type: String,
    default: 0,
  },
  Salary2021: {
    type: String,
    default: 0,
  },
  N2021: {
    type: String,
    default: 0,
  },
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
const express = require("express");
const db = require("./database/config/config");
const schoolType = require("../models/school_type");

exports.getAllSchoolTypes = (req, res) => {
  schoolType
    .findAll()
    .then((schoolTypeInformation) => {
      res.status(200).json({
        messsage: "got all school types successfully!",
        schooltypes: schoolTypeInformation,
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
exports.getOneSchoolType = (res, req) => {
  let schoolTypeId = req.params.id;
  schoolType
    .findByPk(schoolTypeId)
    .then((schooltypeinfo) => {
      res.status(200).json({
        message: " Successfully got a school type with id = " + schoolTypeId,
        schooltypes: schooltypeinfo,
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
exports.createSchoolType = (req, res) => {
  res.send("not yet implemented: create school type!");
};
exports.updateSchoolType = (req, res) => {
  try {
    let schoolTypeId = req.params.id;
    let schooltype = await schoolType.findByPk(schoolTypeId);

    if (!schooltype) {
      res.status(404).json({
        message:
          "Not Found for updating a school type with id = " + schoolTypeId,
        schooltype: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        School_type_id: req.body.School_type_id,
        School_type_name: req.body.School_type_name,
        School_type_description: req.body.School_type_description,
      };
      let result = await schoolType.update(updatedObject, {
        returning: true,
        where: { id: schoolTypeId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a school type with id = " + req.params.id,
          error: "Can not Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a school type with id = " + schoolTypeId,
        schooltypes: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a school type with id = " + req.params.id,
      error: error.message,
    });
  }
};
exports.deleteAllSchoolType = (req, res) => {
  res.send("not yet implemented : deleting a school type!");
};

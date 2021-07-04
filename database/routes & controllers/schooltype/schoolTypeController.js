const express = require("express");
const schoolType = require("../../models/school_type");

exports.getAllSchoolTypes = async (req, res) => {
  try {
    const schooltypes = await schoolType.findAll();
    res.json({
      data: schooltypes,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSchoolType = async (res, req) => {
  const { id } = req.params;

  const schooltypes = await schoolType.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: schooltypes,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSchoolType = async (req, res) => {
  const { School_type_id, School_type_name, School_type_description } =
    req.body;
  try {
    let newSchoolType = await schoolType.create(
      {
        School_type_id: School_type_id,
        School_type_name: School_type_name,
        School_type_description: School_type_description,
      },
      {
        fields: [
          "School_type_id",
          "School_type_name",
          "School_type_description",
        ],
      }
    );
    if (newSchoolType) {
      res.json({
        message: "New School Type created successfully!",
        data: newSchoolType,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong while creating a new school type",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

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
          error: "Can not be Updated",
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
//----------------------------------------------------------------------------------------------------
exports.deleteSchoolType = (req, res) => {
  const { id } = req.params;
  const deletedSchoolType = await schoolType.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "school type removed successfully!",
    data: deletedSchoolType,
  });
};

const express = require("express");
const school = require("../../models/school");

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await school.findAll();
    res.json({
      data: schools,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneSchool = async (res, req) => {
  const { id } = req.params;

  const schools = await school.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: schools,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createSchool = async (req, res) => {
  const {
    School_id,
    school_type_id,
    School_name,
    school_logo,
    Physical_address,
    Mobile_telephone,
    Other_telephone,
    School_email,
    School_website,
  } = req.body;
  try {
    let newSchool = await school.create(
      {
        School_id,
        school_type_id,
        School_name,
        school_logo,
        Physical_address,
        Mobile_telephone,
        Other_telephone,
        School_email,
        School_website,
      },
      {
        fields: [
          "School_id",
          "school_type_id",
          "School_name",
          "school_logo",
          "Physical_address",
          "Mobile_telephone",
          "Other_telephone",
          "School_email",
          "School_website",
        ],
      }
    );
    if (newSchool) {
      res.json({
        message: "New School created successfully!",
        data: newSchool,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong while creating a new school",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateSchool = (req, res) => {
  try {
    let schoolId = req.params.id;
    let schools = await schoolType.findByPk(schoolId);

    if (!schools) {
      res.status(404).json({
        message:
          "Not Found for updating a school type with id = " + schoolId,
        schools: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        School_id:req.body.school_Id,
        School_type_id: req.body.School_type_id,
        School_name: req.body.School_name,
        school_logo: req.body.school_logo,
        Physical_address:req.body.Physical_address,
        Mobile_telephone:req.body.Mobile_telephone,
        Other_telephone:req.body.Other_telephone,
        School_email:req.body.School_email,
        School_website:req.body.School_website
      };
      let result = await school.update(updatedObject, {
        returning: true,
        where: { id: schoolId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a school type with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a school type with id = " + schoolId,
        schools: updatedObject,
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
exports.deleteSchool = (req, res) => {
  const { id } = req.params;
  const deletedSchool = await school.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "school removed successfully!",
    data: deletedSchool,
  });
};

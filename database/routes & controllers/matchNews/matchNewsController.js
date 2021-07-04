const matchNews = require("../../models/match_news");

exports.getAllMatchNews = async (req, res) => {
  try {
    const matchNewss = await matchNews.findAll();
    res.json({
      data: matchNewss,
    });
  } catch (error) {
    res.status(500).json({
      message: "something wrong happened!",
    });
  }
};

//-------------------------------------------------------------------------------------------------------------

exports.getOneMatchNews = async (res, req) => {
  const { id } = req.params;

  const matchNewss = await matchNews.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: matchNewss,
  });
};
//-------------------------------------------------------------------------------------------------------------
exports.createMatchNews = async (req, res) => {
  const {
    Match_news_id,
    Match_id,
    Match_news_title,
    Match_news_body,
    Match_news_photo,
    Season_league_id,
  } = req.body;
  try {
    let newmatchNews = await matchNews.create(
      {
        Match_news_id: Match_news_id,
        Match_id: Match_id,
        Match_news_title: Match_news_title,
        Match_news_body: Match_news_body,
        Match_news_photo: Match_news_photo,
        Season_league_id: Season_league_id,
      },
      {
        fields: [
          "Match_news_id",
          "Match_id",
          "Match_news_title",
          "Match_news_body",
          "Match_news_photo",
          "Season_league_id",
        ],
      }
    );
    if (newmatchNews) {
      res.json({
        message: "created successfully!",
        data: newmatchNews,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "something went wrong!",
    });
  }
};

//----------------------------------------------------------------------------------------------------------------

exports.updateMatchNews = (req, res) => {
  try {
    let matchNewssId = req.params.id;
    let matchNewss = await matchNews.findByPk(matchNewssId);

    if (!matchNewss) {
      res.status(404).json({
        message:
          "Not Found for updating a matchNewss with id = " + matchNewssId,
        matchNewss: "",
        error: "404",
      });
    } else {
      let updatedObject = {
        Match_news_id: req.body.Match_news_id,
        Match_id: req.body.Match_id,
        Match_news_title: req.body.Match_news_title,
        Match_news_body: req.body.Match_news_body,
        Match_news_photo: req.body.Match_news_photo,
        Season_league_id: req.body.Season_league_id,
      };
      let result = await matchNewss.update(updatedObject, {
        returning: true,
        where: { id: matchNewssId },
      });
      if (!result) {
        res.status(500).json({
          message:
            "Error -> Can not update a matchNewss with id = " + req.params.id,
          error: "Can not be Updated",
        });
      }

      res.status(200).json({
        message: "Update successfully a matchNewss with id = " + matchNewssId,
        matchNewss: updatedObject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "Error -> Can not update a matchNewss with id = " + req.params.id,
      error: error.message,
    });
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMatchNews = (req, res) => {
  const { id } = req.params;
  const deletedmatchNewss = await matchNewss.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "removed successfully!",
    data: deletedmatchNewss,
  });
};

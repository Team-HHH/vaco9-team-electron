const axios = require('axios');

exports.getVideos = async function () {
  const url = `${process.env.SERVER_URL}/videos`;
  const response = await axios.get(url);

  return response;
};

exports.getAds = async function () {
  const url = `${process.env.SERVER_URL}/campaign/popup`;
  const response = await axios.get(url);

  return response;
};

exports.sendStats = async function (campaignId, type) {
  const url = `${process.env.SERVER_URL}/campaign/stats`;
  await axios.patch(url, {
    campaignId,
    type
  });
}

exports.login = async function (data) {
  const url = `${process.env.SERVER_URL}/auth/login/user`;
  const response = await axios.post(url, data);

  return response;
}

exports.register = async function (data) {
  const url = `${process.env.SERVER_URL}/auth/register/user`;
  const response = await axios.post(url, data);

  return response;
}

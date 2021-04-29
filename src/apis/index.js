const axios = require('axios');

const serverUrl = 'https://api.flexilis.xyz';

exports.getVideos = async function () {
  const url = `${serverUrl}/videos`;
  const response = await axios.get(url);

  return response;
};

exports.getAds = async function () {
  const url = `${serverUrl}/campaign/popup`;
  const response = await axios.get(url);

  return response;
};

exports.sendStats = async function (campaignId, type) {
  const url = `${serverUrl}/campaign/stats`;
  await axios.patch(url, {
    campaignId,
    type
  });
}

exports.login = async function (data) {
  const url = `${serverUrl}/auth/login/user`;
  // const url = `http://localhost:5000/auth/login/user`;
  const response = await axios.post(url, data);

  return response;
}

exports.register = async function (data) {
  const url = `${serverUrl}/auth/register/user`;
  const response = await axios.post(url, data);

  return response;
}

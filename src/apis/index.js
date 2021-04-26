const axios = require('axios');

exports.getVideos = async function () {
  const url = 'http://localhost:5000/videos';
  const response = await axios.get(url);

  return response;
};

exports.getAds = async function () {
  const url = 'http://localhost:5000/campaign/popup';
  const response = await axios.get(url);

  return response;
};

exports.sendStats = async function (campaignId, type) {
  const url = 'http://localhost:5000/campaign/stats';
  await axios.patch(url, {
    campaignId,
    type
  });
}

exports.login = async function (data) {
  const url = 'http://localhost:5000/auth/login/user';
  const response = await axios.post(url, data);

  return response;
}

exports.register = async function (data) {
  const url = 'http://localhost:5000/auth/register/user'
  const response = await axios.post(url, data);

  return response;
}

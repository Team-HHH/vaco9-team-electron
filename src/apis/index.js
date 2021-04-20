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
  await axios.post(url, {
    campaignId,
    type
  });
}

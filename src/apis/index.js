const axios = require('axios');

const serverUrl = 'http://localhost:5000';

exports.getVideos = async function () {
  try {
    const url = `${serverUrl}/videos`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
  }
};

exports.getAds = async function (token) {
  try {
    const url = `${serverUrl}/campaign/popup`;
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      }
    });

    return response;
  } catch (error) {
  }

};

exports.sendStats = async function (campaignId, type) {
  try {
    const url = `${serverUrl}/campaign/stats`;
    await axios.patch(url, {
      campaignId,
      type
    });
  } catch (error) {
  }
}

exports.login = async function (data) {

  try {
    const url = `${serverUrl}/auth/login/user`;
    // const url = `http://localhost:5000/auth/login/user`;
    const response = await axios.post(url, data);

    return response;
  } catch (error) {
  }
}

exports.register = async function (data) {
  try {
    const url = `${serverUrl}/auth/register/user`;
    const response = await axios.post(url, data);

    return response;
  } catch (error) {
  }
}

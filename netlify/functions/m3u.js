exports.handler = async function () {
  return {
    statusCode: 302,
    headers: {
      Location:
        "https://raw.githubusercontent.com/ROHIT12-bit/Sonyyaytelugu/main/jakiekosam.m3u",
      "Content-Type": "audio/x-mpegurl"
    }
  };
};

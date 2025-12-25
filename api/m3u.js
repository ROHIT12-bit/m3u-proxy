export default function handler(req, res) {
  res.setHeader("Content-Type", "audio/x-mpegurl; charset=utf-8");
  res.redirect(
    "https://raw.githubusercontent.com/ROHIT12-bit/Sonyyaytelugu/main/jakiekosam.m3u"
  );
}

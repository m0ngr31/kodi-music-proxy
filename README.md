# Kodi Music HTTPS proxy
I built this so that I could stream music from my Kodi box to an Amazon Alexa device. Since Kodi only creates HTTP URLS and Alexa requires HTTS, this microserver was born.

## Deploying
If you are using my Kodi-Alexa skill and don't want to use my proxy server for streaming, you can easily deploy to Heroku with this button below. Paste the URL Heroku gives you into the `ALT_PROXY` setting in your environment variables of your skill server.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy/?template=https://github.com/m0ngr31/kodi-music-proxy)
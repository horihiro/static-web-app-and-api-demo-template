const data = require('../shared/tweets-data');
//
module.exports = function (context, req, cosDbNeg) {
  try {

    let output = {};
/*
    for (var key in cosDbPos) {
      var value = cosDbPos[key];
      positive.push({
        id: value.data.TweetId,
        text: value.data.TweetText,
        name: value.data.TweetedBy,
        timestamp: value.data.CreatedAt
      });
    }
    for (var key in cosDbNeg) {
      var value = cosDbNeg[key];
      negative.push({
        id: value.data.TweetId,
        text: value.data.TweetText,
        name: value.data.TweetedBy,
        timestamp: value.data.CreatedAt
      });
    }
    for (var key in cosDbNeu) {
      var value = cosDbNeu[key];
      neutral.push({
        id: value.data.TweetId,
        text: value.data.TweetText,
        name: value.data.TweetedBy,
        timestamp: value.data.CreatedAt
      });
    }
    output = {
      "positive": positive,
      "negative": negative,
      "neutral": neutral
    }
*/

const negative = cosDbNeg.filter(item => item.sentiment === 'negative')
const positive = cosDbNeg.filter(item => item.sentiment === 'positive')
const neutral = cosDbNeg.filter(item => item.sentiment === 'neutral')

output = {
  "positive": positive,
  "negative": negative,
  "neutral": neutral
}
    context.res.status(200).json(output);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
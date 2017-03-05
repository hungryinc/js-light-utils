// private var topics
var topics = {};

class Pubsub {
  on(topic, listener) {
    // create the topic if not yet created
    if (!topics[topic]) {
      topics[topic] = [];
    }

    // add the listener
    topics[topic].push(listener);
  }

  off(topic) {
    // deletes everything under that topic.
    delete topics[topic];
  }

  trigger(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if (!topics[topic] || topics[topic].length < 1) {
      return;
    }

    // send the event to all listeners
    topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
}

const pubsub = new Pubsub();

// return a singleton.
export default pubsub;

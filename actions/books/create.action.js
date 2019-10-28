const Book = require("../../models/book");
const shopListener = require("../../listeners/shop.listener");
const events = require("events");
const emitter = new events.EventEmitter();

class Create {
  constructor(data) {
    this.data = data;
  }

  async exec() {
    try {
      shopListener(emitter); // sebagai subscriber

      let result = new Book(this.data);
      await result.save();

      emitter.emit("shop.add-qty", result); // sebagai publisher

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Create;

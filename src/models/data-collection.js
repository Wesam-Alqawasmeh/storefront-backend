"use strict";

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  get(id) {
    if (id) {
      return this.model.findOne({ id });
    } else {
      return this.model.findAll({});
    }
  }

  create(record) {
    this.model.create(record);
    return this.model.findAll({});
  }

  update(id, data) {
    this.model.findOne({ where: { id } }).then((record) => record.update(data));
    return this.model.findAll({});
  }

  delete(id) {
    this.model.destroy({ where: { id } });
    return this.model.findAll({});
  }
}

module.exports = DataCollection;

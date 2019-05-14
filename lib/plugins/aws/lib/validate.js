'use strict';

const BbPromise = require('bluebird');

module.exports = {
  validate() {
    if (!this.serverless.config.servicePath) {
      return BbPromise.reject('This command can only be run inside a service directory');
    }

    this.options.stage = this.provider.getStage();
    this.options.region = this.provider.getRegion();

    return BbPromise.resolve();
  },
};

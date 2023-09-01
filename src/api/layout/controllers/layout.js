"use strict";

/**
 * layout controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const { removeAttrsAndId, removeTime } = require("../../../utils/index.js");

module.exports = createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };

    const { data } = await super.find(ctx);

    return removeAttrsAndId(removeTime(data[0]));
    // return data
  },
}));

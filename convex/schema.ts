import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  rooms: defineTable({
    imageId: v.string(),
    title: v.string(),
    type: v.string(),
  }),
});
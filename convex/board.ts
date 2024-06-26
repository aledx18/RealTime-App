import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Unauthorized')
    }

    const board = await ctx.db.insert('boards', {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: ''
    })

    return board
  }
})

export const remove = mutation({
  args: {
    id: v.id('boards')
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Unauthorized')
    }
    await ctx.db.delete(args.id)
  }
})

export const update = mutation({
  args: {
    id: v.id('boards'),
    title: v.string()
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Unauthorized')
    }

    const title = args.title.trim()

    if (!title) {
      throw new Error('Title is required')
    }

    if (title.length > 50) {
      throw new Error('Title must be less than 50 characters')
    }

    const board = await ctx.db.patch(args.id, {
      title: args.title
    })

    return board
  }
})

export const get = query({
  args: {
    id: v.id('boards')
  },
  handler: async (ctx, args) => {
    const board = await ctx.db.get(args.id)
    return board
  }
})

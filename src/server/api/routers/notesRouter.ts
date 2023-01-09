import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const notesRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { title, description } = input;

      await ctx.prisma.notes.create({
        data: {
          title,
          description,
        },
      });

      return {
        title,
        description,
      };
    }),

  update: publicProcedure
    .input(
      z.object({ id: z.string(), title: z.string(), description: z.string() })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, title, description } = input;

      await ctx.prisma.notes.update({
        where: {
          id,
        },
        data: {
          title,
          description,
        },
      });

      return {
        title,
        description,
      };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id } = input;

      await ctx.prisma.notes.delete({
        where: {
          id,
        },
      });

      return {
        id,
      };
    }),

  get: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.notes.findMany();
    return items;
  }),
});

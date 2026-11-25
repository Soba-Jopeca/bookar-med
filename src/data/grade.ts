import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
export const gradePilot = createServerFn({ method: "POST" })
  .inputValidator(z.tuple([z.number().int().min(0).max(3), z.number().int().min(0).max(3)]))
  .handler(({ data }) => ({ score: Number(data[0] === 2) + Number(data[1] === 2) }));

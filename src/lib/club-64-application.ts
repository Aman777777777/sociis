import { z } from "zod";

const textField = (maxLength: number) => z.string().trim().min(1).max(maxLength);

export const club64ApplicationSchema = z
  .object({
    name: textField(100),
    email: z
      .string()
      .trim()
      .max(254)
      .email()
      .transform((value) => value.toLowerCase()),
    work: textField(200),
    reason: textField(1200),
  })
  .strict();

export type Club64Application = z.infer<typeof club64ApplicationSchema>;

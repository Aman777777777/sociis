import { createServerFn } from "@tanstack/react-start";

import { club64ApplicationSchema } from "@/lib/club-64-application";

export const submitClub64Application = createServerFn({ method: "POST" })
  .validator(club64ApplicationSchema)
  .handler(async ({ data }) => {
    const { submitClub64Application: submit } = await import("@/lib/club-64-application.server");
    return submit(data);
  });

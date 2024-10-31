import zod, { z } from "zod"

const zodstring=zod.string()
type a=z.infer<typeof zodstring>
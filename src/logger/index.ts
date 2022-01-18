import logger from "pino";
import dayjs from "dayjs";

// Reason to use logging service like Pino or Winston over clg:
// Can format messages
// clg locks the IO, and because nodejs is single threaded, you don't want to block the IO.

const log = logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log;

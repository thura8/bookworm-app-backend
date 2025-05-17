import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode == 200) console.log("GET request sent successfully");
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (err) => {
      console.error("Error while sending request", err);
    });
});

export default job;

// CRON JOB EXPLANATION:
//Cron jobs are scheduled tasks that run periodically at fixed intervals
//We want to send 1 GET request for every 14 minutes

//How to define a "Schedule"?
//You define a schedule using a cron expression, which consists of five fields representing:

//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

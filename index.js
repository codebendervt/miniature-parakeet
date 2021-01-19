const appInsights = require('applicationinsights');



export default async (req, res) => {

    try {
        appInsights.defaultClient.context.tags[appInsights.defaultClient.context.keys.cloudRole] = "Backpack";
        appInsights.setup().setSendLiveMetrics(true).start();
        res.json({ message: "analytics started" })
    } catch {
        res.json({ message: "analytics failed to start" })
    }


}

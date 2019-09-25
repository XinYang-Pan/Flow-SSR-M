const isProductionEnv = false;
const URI = isProductionEnv ? 'https://flow-admin.flowclub.com' : 'https://flow-admin-uat.blueo.tech';

const urlHandler = (path) => {
    return `${URI}${path}`;
}

export default {
    'activity-recent': urlHandler('/public/api/activity/activityNotice/recentActivity'),
    'activity-review': urlHandler('/public/api/activity/activityNotice/reviewActivity')
}
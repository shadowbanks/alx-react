import notifications from '../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    // console.log(notifications);
    return notifications.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
};

export default getAllNotificationsByUser;

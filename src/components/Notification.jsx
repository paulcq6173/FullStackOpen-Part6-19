import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  if (!notification.message) {
    return;
  }
  const lowCaseMes = notification.message.toLowerCase();
  let errOccurs = false;
  if (lowCaseMes.includes('error') || lowCaseMes.includes('fail')) {
    errOccurs = true;
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    color: errOccurs ? 'red' : 'green',
  };
  return <div style={style}>{notification.message}</div>;
};

export default Notification;

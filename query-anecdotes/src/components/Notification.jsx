import { useContext } from 'react';
import NotifContext from './NotificationContext';

const Notification = () => {
  const [notif, notifDispatch] = useContext(NotifContext);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display: notif.display
  }

  return (
    <div style={style}>
      {notif.message}
    </div>
  )
}

export default Notification

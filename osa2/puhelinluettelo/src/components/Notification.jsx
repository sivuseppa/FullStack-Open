/* eslint-disable react/prop-types */

const Notification = ({ message, type, setter }) => {
  if (message === null) {
    return null;
  }

  const noticeStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (type === 'error') {
    noticeStyle.color = 'red';
  }

  setTimeout(() => {
    setter({
      message: null,
      type: null,
    });
  }, 5000);

  return (
    <div className={type} style={noticeStyle}>
      {`${type.at(0).toUpperCase()}${type.slice(1)}`}: {message}
    </div>
  );
};

export default Notification;

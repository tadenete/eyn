function Notification(props) {
  const { message, status } = props;
  
  const getStatusConfig = () => {
    switch (status) {
      case "success":
        return {
          css: "alert alert-success border-0 shadow-sm",
          icon: "fas fa-check-circle",
          title: "Message Sent!"
        };
      case "error":
        return {
          css: "alert alert-danger border-0 shadow-sm",
          icon: "fas fa-exclamation-triangle",
          title: "Error"
        };
      case "pending":
        return {
          css: "alert alert-info border-0 shadow-sm",
          icon: "fas fa-spinner fa-spin",
          title: "Sending..."
        };
      default:
        return {
          css: "alert alert-info border-0 shadow-sm",
          icon: "fas fa-info-circle",
          title: "Info"
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={config.css} role="alert">
      <div className="d-flex align-items-center">
        <i className={`${config.icon} me-2`} style={{fontSize: '1.1rem'}}></i>
        <div>
          <strong className="d-block">{config.title}</strong>
          <span className="small">{message}</span>
        </div>
      </div>
    </div>
  );
}

export default Notification;

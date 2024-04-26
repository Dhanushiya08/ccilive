import { Avatar, Button } from "antd";
import { Icon } from "@iconify/react";
import "../CSS/dashboard.scss";
import { useNavigate } from "react-router-dom";
function DashboardCall() {
  const navigate = useNavigate();
  const handlecallpick = () => {
    navigate("/clientcall");
  };
  return (
    <>
      <div className="mx-auto">
        <div className="d-flex justify-content-center call-modal-title">
          {" "}
          Incoming Call
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <Avatar size={64} icon={<Icon icon="ph:user" />} />
        </div>

        <div className="d-flex justify-content-center call-modal-user">
          Lerervie
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div>
              <Button
                shape="circle"
                size="large"
                className="phn-icon-call"
                onClick={() => handlecallpick()}
              >
                <Icon icon="ic:sharp-call" className="phn-icon" />
              </Button>
            </div>
            <div className="call-modal-call">Attend</div>
          </div>
          <div className="px-2">
            <div>
              <Button shape="circle" size="large" className="phn-icon-miss">
                <Icon
                  icon="material-symbols:phone-missed"
                  className="phn-icon"
                />
              </Button>
            </div>
            <div className="call-modal-call">Reject</div>
          </div>
          <div className="px-2">
            <div>
              <Button shape="circle" size="large" className="phn-icon-ass">
                <Icon icon="material-symbols:add-call" className="phn-icon" />
              </Button>
            </div>
            <div className="call-modal-call">Assist</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardCall;

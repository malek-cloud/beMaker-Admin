import "../../pages/activities/activities.css";
import axios from "axios";
const GetEmployee = (props) => {
  const deleteProduct = async () => {
      try {
        const response = await axios({
          method: "delete",
        url : process.env.REACT_APP_BACKEND_URL + `hire/deleteEmployee/${props.id}`,

          headers: { "Content-Type": "multipart/form-data" },
        });
        const data = response.status;
        console.log(response.message);
        if (data === 200) {
          window.location.reload(true);
        }
      } catch (err) {
        console.log("erreur matefsa5ch el employee raw" + err);
      }
  };
  return (
    <div className="activityDetail">
      <div className="activityItem">
        <div
          className="activityItemTitle"
        >
          {props.prenom} {props.nom} {props.type==="administrateur" ? "( Administrateur )" : ""}
        </div>
        <div className="changeItem">
          <div className="deleteActivity" onClick={deleteProduct}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetEmployee;

import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function SurfboardForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="surfboard-form panel">
      <h4 className="subtitle is-3">Add Surfboard</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SurfboardForm;
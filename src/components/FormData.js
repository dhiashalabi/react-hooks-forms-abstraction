import { useLocation } from "react-router-dom";

function FormData() {
    const location = useLocation();
    const formData = new URLSearchParams(location.search);

    return (
        <div>
            <p>First Name: {formData.get("firstName")}</p>
            <p>Last Name: {formData.get("lastName")}</p>
            <p>Admin: {formData.get("admin") === "true" ? "Yes" : "No"}</p>
        </div>
    );
}

export default FormData;
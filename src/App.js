import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormData from "./components/FormData";
import Form from "./components/Form";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="formdata" element={<FormData />} />
            </Routes>
        </BrowserRouter>
    );
}

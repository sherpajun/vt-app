import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import first from "../view/First";
import App from "../App";


const NotFound = () => {
    return <Link to="..">돌아가!!</Link>;
};
const AboutPage = () => {
    return <>about</>;
};
const PicturePage = ({ data }:{data : any}) => {
    return (
        <>
            <h1>data = {data}</h1>
            Picture
        </>
    );
};
const First = () => {
    return <>first</>;
};

const Router = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<App />} />
                    {/* <Route path="/*" element={<NotFound />} /> */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/picture"
                        element={<PicturePage data="전달된 props" />}
                    />
                    <Route path="/first" element={<First />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
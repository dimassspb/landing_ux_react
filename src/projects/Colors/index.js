import Layout from "../Layout";
import "./index.css";

const Colors = () => {
    const name = ["C", "O", "L", "O", "R", "S"];
    return (
        <Layout>
            <div className='colors-container'>
                <div className='row h-100 align-items-center justify-content-center'>
                    {name.map((el, index) => {
                        return <div className={`col-md-2 letter letter${index}`}>{el}</div>;
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Colors;

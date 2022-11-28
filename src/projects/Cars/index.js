import "./index.css";
import Layout from "./../Layout/index";

const Cars = () => {
    return (
        <Layout>
            <div className='cars-parent'>
                <div className='row'>
                    <div className='col-md-6 part-1'>
                        <img
                            className=''
                            src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                            alt='car'
                        />
                    </div>
                    <div className='col-md-6 part-2'>
                        <img
                            className=''
                            src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
                            alt='car'
                        />
                    </div>
                    <h1 className='cars-text'>C A R S</h1>
                </div>
                <div className='text-separator'>
                    <span>DMITRII</span>
                </div>
            </div>
        </Layout>
    );
};

export default Cars;

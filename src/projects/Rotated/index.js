import Layout from "./../Layout/index";
import "./index.css";

const Rotated = () => {
    return (
        <Layout>
            <div className='rotated-parent'>
                <div className='row h-100 align-items-center'>
                    <div className='col-md-6'>
                        <div className='h-75 p-5'>
                            <lottie-player
                                src='https://assets10.lottiefiles.com/packages/lf20_qhrndegx.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='rotated-text-part'>
                            <h1 data-aos='slide-right'>
                                <b>DMITRII</b>
                            </h1>
                            <p data-aos='slide-left'>
                                <b>Javascript</b> Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Rotated;

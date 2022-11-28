import Layout from "../Layout";
import "./index.css";

const Starbucks = () => {
    return (
        <Layout>
            <div className='coffeeshop-parent'>
                <div className='row h-100 align-items-center'>
                    <div
                        data-aos='slide-down'
                        className='col-md-6 coffeeshop-text-part p-5'
                    >
                        <h1>
                            It's not just <b>COFFEE</b>
                        </h1>
                        <h2>
                            It's <b>SOMETHING</b> more...
                        </h2>
                        <p>
                            lorem ipsum dolor sitlorem ipsum dolor sitlorem
                            ipsum dolor sitlorem ipsum dolor sitlorem ipsum
                            dolor sit lorem ipsum dolor sitlorem ipsum dolor
                            sitlorem ipsum dolor sitlorem ipsum dolor sitlorem
                            ipsum dolor sit
                        </p>
                    </div>
                    <div
                        data-aos='slide-up'
                        className='col-md-6 h-75 flex align-items-center coffee-cup'
                    >
                        <lottie-player
                            src='https://assets8.lottiefiles.com/packages/lf20_iij1welp.json'
                            background='transparent'
                            speed='1'
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <div className='circle'></div>
                </div>
            </div>
        </Layout>
    );
};

export default Starbucks;

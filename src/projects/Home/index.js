import Layout from "./../Layout/index";
import "./index.css";
const Home = () => {
    return (
        <Layout>
            <div className='home-parent'>
                <div className='d-flex parts'>
                    <div className='part1 text-center text-white d-flex align-items-center justify-content-center flex-column'>
                        <h3 className='my-5' data-aos='slide-right'>
                            <b>Full Stack Developer</b>
                        </h3>
                        <div className='h-50 p-5'>
                            <lottie-player
                                src='https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                    <div className='part2 text-center text-white d-flex align-items-center justify-content-center flex-column'>
                        <div className='h-50 p-5'>
                            <lottie-player
                                src='https://assets1.lottiefiles.com/packages/lf20_z01bika0.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <h3 className='my-5' data-aos='slide-left'>
                            <b>Instructor</b>
                        </h3>
                    </div>
                </div>
                <div className='separator'>
                    <span>DMITRII</span>
                </div>
            </div>
        </Layout>
    );
};

export default Home;

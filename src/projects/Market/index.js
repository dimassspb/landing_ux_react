import Layout from "../Layout";
import "./index.css";

const Market = () => {
    return (
        <Layout>
            <div className='market-parent'>
                <div className='row align-items-center justify-content-center h-100'>
                    <div className='col-md-4 text-center'>
                        <h1 data-aos='slide-right'>BRAND</h1>
                        <div className='h-50 p-5'>
                            <lottie-player
                                src='https://assets1.lottiefiles.com/packages/lf20_fpeqspfn.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                        <h2 data-aos='slide-left'>Market analyst</h2>
                    </div>
                    <div className='col-md-7'>
                        <div className='h-50 p-5' data-aos='slide-down'>
                            <lottie-player
                                src='https://assets4.lottiefiles.com/private_files/lf30_rn1i0mvd.json'
                                background='transparent'
                                speed='1'
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Market;

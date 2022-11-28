import Layout from "../Layout";
import './index.css'

const Glowing = () => {
  return (
      <Layout>
          <div className='glowing-parent'>
              <div className='h-100'>
                  <lottie-player
                      src='https://assets5.lottiefiles.com/packages/lf20_SkhtL8.json'
                      background='transparent'
                      speed='1'
                      loop
                      autoplay
                  ></lottie-player>
              </div>
              <div className='glowing-text-part'>
                <h1>JavaScript</h1>
                <p>developer</p>
              </div>
          </div>
      </Layout>
  );
}
 
export default Glowing;
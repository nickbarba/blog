import Head from 'next/head'
import Meta from '../components/Meta'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'

export default () => (
  <div>
    <Head>
      <title>Nick Barba</title>
    </Head>

    <Meta />

    <body className='container'>
      <Header>
        <div className='social'>
          <SocialLinks />
        </div>
      </Header>
      <div className='main'>
        <h1>Nick Barba</h1>
          ...
      </div>
    </body>

    <style jsx>{`
      h1 {
        font-size: 72px;  
        font-weight: 700;
        line-height: 95%;
        margin-bottom: 175px;
      }
      
      .main {
        font-size: 30px;
        font-weight: 400;
        width: 210px;
        margin-top: 125px;
        margin-left: 45px;
      }

     .social {
       width: 130px;
       float: right;
       margin-top: 20px;
       margin-right: 45px;
     }
  `}</style>
  </div>
)

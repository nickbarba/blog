import Head from 'next/head'

export default () => (
  <div className='root'>
    <Head>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' />
    </Head>

    <a href='https://twitter.com/n1ckbarba'><i className='fa fa-twitter' /></a>
    <a href='https://www.linkedin.com/in/barbanick/'><i className='fa fa-linkedin' /></a>
    <a href='mailto:nickbarba@gmail.com'><i className='fa fa-envelope' /></a>

    <style jsx>{`
      .root {
        border-sizing: border-box;
        width: 100%;
      }

      i {
        width: 33%;
        font-size: 20px;
      }

      a {
        color: #ffffff;
      }

      a:hover {
        color: #5c38ff;
      }

      .fa-linkedin {
        text-align: center;
      }

      .fa-envelope {
        text-align: right;
      }
  `}</style>
  </div>
)

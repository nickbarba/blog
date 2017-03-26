import Head from 'next/head'

export default () => (
  <div>
  <Head>
    <title>Nick Barba</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <div className="main">
  <h1>Nick Barba</h1>
  <ul>
    <li><a href="https://twitter.com/n1ckbarba">[Twitter]</a></li>
    <li><a href="https://www.linkedin.com/in/barbanick/">[LinkedIn]</a></li>
    <li><a href="mailto:nickbarba@gmail.com">[Email]</a></li>
  </ul>
  ...
  </div>
  <style jsx>{`
    * {
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 700;
      font-size: 24px;
      color: #535353;
    }
    
    h1 {
      font-size: 26px;  
    }
    
    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
      margin-top: 50px;
      margin-bottom: 100px;
    }

    a {
      display: block;
      color: #9B9B9B;
      text-decoration: none;
      cursor: pointer;
    }

    a:hover {
      color: #535353;  
    }

    .main {
      position: fixed;
      top: 32px;
      left: 34px;
    }

  @media (min-width: 480px) {
    .main {
      top: 80px;
      left: 85px;
    } 


  } 
  `}</style>
  </div>
)

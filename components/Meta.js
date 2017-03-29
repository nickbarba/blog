import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>

    <style jsx global>{`

    * {
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
      background-color: #000000;
    }

    .container {
      box-sizing: border-box;
      margin: auto;
      width: 100%;
      max-width: 1024px;     
    }

  `}</style>
  </div>
)

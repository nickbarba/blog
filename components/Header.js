export default ({ children }) => (
  <div className='root'>
    { children }

    <style jsx>{`
      .root {
        height: 60px;
        border-style: none;
      }

      @media (min-width: 480px) {
        .root {
          border-bottom:1px solid #ffffff;
        }
      }
    `}</style>
  </div>
)

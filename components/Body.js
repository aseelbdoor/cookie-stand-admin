import Header from './Header'
import Footer from './Footer'
import Main from './Main'


export default function Body({ handler,data,del}) {

  
  return (
    <div className="flex flex-col min-h-screen">
      <Header nav={"Overview"} lin={'/overview'} />
      <Main handler={handler} data={data} del={del} />
      <Footer data={data} />
    </div >
  )
}
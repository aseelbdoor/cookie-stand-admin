import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { useState } from "react"

export default function Body(){
  const [json, serJson] = useState([])

  async function submitHandler(event){
    event.preventDefault();
    const dataToSave = {
      Location:  event.target.location.value,
      Minimum:  event.target.Minimum.value,
      Maximum:  event.target.Maximum.value,
      Average: event.target.Average.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 615]
    };

    await serJson([...json,dataToSave])
    event.target.reset();
  }
    return(
        <div className="flex flex-col min-h-screen">
        <Header nav={"Overview"} lin={'/overview'} />
        <Main handler={submitHandler} data={json} />
        <Footer data={json} />
      </div >
    )
}
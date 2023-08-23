import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { useState,useEffect } from "react"
import { useAuth } from "@/contexts/auth"

export default function Body() {
  const [json, serJson] = useState([])
  const { login, user, token } = useAuth()
  const baseUrl = process.env.NEXT_PUBLIC_URL

  async function getData() {
    if (token) {
      const url = baseUrl + "/api/v1/cookie_stands/"
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }

      }
      const res = await fetch(url, option)
      if (res.status === 200) {
        const data = await res.json();
        data.forEach((value) => {
          serJson((json2)=>[...json2, value])
        });

      } else {
        console.log("Failed to access protected route.");
      }
    }
    
  }

  async function PostData(cookies) {
    if (token) {
      const url = baseUrl + "/api/v1/cookie_stands/"
      const option = {
        method: "POST",
        body: JSON.stringify(cookies),
        headers: {
          "Authorization": `Bearer ${token.access}`,
          "Content-Type": "application/json"

        }

      }
      const res = await fetch(url, option)
      if (res.status === 201) {
        serJson([...json, cookies])

      } else {
        console.log("Failed to access protected route.");
      }
      
    }
  }
  useEffect(() => {
    getData();
  }, [token]);


  async function submitHandler(event) {
    event.preventDefault();
    const dataToSave = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.Minimum.value,
      maximum_customers_per_hour: event.target.Maximum.value,
      average_cookies_per_sale: event.target.Average.value
    };

    PostData(dataToSave)
    event.target.reset();
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header nav={"Overview"} lin={'/overview'} />
      <Main handler={submitHandler} data={json} />
      <Footer data={json} />
    </div >
  )
}
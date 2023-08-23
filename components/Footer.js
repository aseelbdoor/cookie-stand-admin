

export default function Footer({ data }) {
  return (
    <footer className="p-4 mt-8 bg-green-500 text-gray-50" >
      {data ? (
        <>
          <>{data.length} </>
          Locations World Wide
        </>
      ) : <>2023</>
        }

    </footer>

  )
}
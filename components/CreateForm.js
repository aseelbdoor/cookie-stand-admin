import {hours} from '@/data'
import {sales} from '@/data'
import { useState } from 'react';
import React from 'react';

const CreateForm = ({data,del}) => {
    const [changes,setChanges]=useState(sales)
    
    return (
       <>
       { data.length > 0 ?(
        
       <table className='mx-auto my-8 text-xl text-center bg-green-300 w-900px'>
        <thead>
            <tr key="500" className='bg-green-400' >
                <th className='border border-black center '>Location</th>
                {hours.map(obj =>(
                    <th className='border border-black center '>{obj}</th>
                ))}
                <th className='border border-black center '>Totals</th>

            </tr>
        </thead>
        <tbody>
            {data.map(obj =>(
                <tr key={obj.id}>
                    <td className='border border-black center '>
                    <span style={{ marginRight: '5px' }}>{obj.location}</span>
                    <svg onClick={() => del(obj.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ verticalAlign: 'middle', cursor: 'pointer' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    </td>
                    {sales.map(x =>(
                        
                       <td className='border border-black center '>{x}</td>
                       
                    ))}

                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr key="600" className='bg-green-400' >
                <th className='border border-black center '>Totals</th>
                {changes.map(obj =>(
                    <th className='border border-black center '>{obj*data.length}</th>
                ))}

            </tr>
        </tfoot>
       </table>
       ) : <h2 className='mt-10 text-2xl font-semibold text-gray-500'>No Cookie Stands Available</h2>
       }
       </>
    );
}

export default CreateForm;
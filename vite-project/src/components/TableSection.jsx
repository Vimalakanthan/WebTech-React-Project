import React from 'react'

const tableHeading = [
    {
    colName: "Avatar",
    icon:"👤", 
    },
    {
    colName: "Name",
    icon:"📛", 
    },
    {
    colName: "Status",
    icon:"✅", 
    },
]

const tableData = [
    {
      avatar: "👨‍💼",
      name: "Alice",
      status: "Active"  
    },
    {
      avatar: "👨‍💼",
      name: "Bob",
      status: "Inactive"  
    },
]

function TableSection() {
  return (
    <div className='container mx-auto p-6'>
        <h2 className=' text-2xl font-bold mb-4'>📊User Data</h2>
        <table className='border border-collapse min-w-full'>
           <thead>
            <tr>
               {tableHeading.map((heading) => (
                <th className='bg-gray-300 border border-gray-400 px-4 py-2' key={heading.colName}>
                   {heading.icon} {heading.colName} 
                </th>

               )) 

               } 
            </tr>
           </thead>
           <tbody>
             {tableData.map((user, index) => (
                <tr key={index}>
                    <td className='border border-gray-300 px-4 py-2'>
                        
                       {user.avatar}
                    </td>
                    <td className='border border-gray-300 px-4 py-2'>
                        {user.name}
                    </td>
                    <td className={`border border-gray-300 px-4 py-2 ${user.status == "Active" ? `text-green-600` : `text-red-600`}`}>
                          {user.status}
                    </td>
                      
                </tr>
             ))}
           </tbody>
        </table>
    </div>
  )
}

export default TableSection
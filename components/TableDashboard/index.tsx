import { Table } from '@mantine/core';
import { useNFTDrop } from '@thirdweb-dev/react';
import { Contract } from 'ethers';
import { useEffect, useState } from 'react';

export default function TableDashboardSupplier() {
    const [data, setData] = useState([])
    const contract = useNFTDrop("0x4fEfe8Abf8CE628AaB982b6EB99FF68cC71eCB89")
    useEffect(() => {
      dataGet()
    
    }, [contract])

    const dataGet =async () => {
    const elements = [];
        
        if(contract){
          const nft = await contract.getAll();
            nft.map((doc)=>{
                elements.push({
                    name:doc.metadata.name,
                    owner:doc.owner,
                    description:doc.metadata.description

                })
            })
            setData(elements)
          console.log(nft);
        }
      }

    

  const rows = data.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.owner}</td>
      <td>{element.description}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
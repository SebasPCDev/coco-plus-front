import MyCoworkingDetail from "@/app/components/myCoworkigs/MyCoworkingDetail"

const myCoworkingsDetailpage = ({ params }: { params: { id: string } }) => { 
    const id = params.id

    return (
       <MyCoworkingDetail id={id} /> 
        
    )
    

}

export default myCoworkingsDetailpage
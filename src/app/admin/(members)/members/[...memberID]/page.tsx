import UpdateUserInfo  from '@/components/admin/UpdateUserInfo'

export default function MemberDetails({
    params
}:{
    params: {
        memberID: string[]
    }
}) {
    if(params.memberID[1] === "details") {
        return(
            <> 
                details
            </>
        )
    } 
    else if (params.memberID[1] === "update") {
        return(
            <>
                <UpdateUserInfo />
            </>
        )
    }
    else if (params.memberID[1] === "delete") {
        return(
            <p>Member with ID: {params.memberID[0]} - {params.memberID[1]}d successfully! </p>
        )
    }

    return(
        <>
            Member ID: {params.memberID}  <br />
            params length: {params.memberID.length}
        </>
    )
}


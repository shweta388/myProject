import React, {useState}from 'react'
import Airplane from '@spectrum-icons/workflow/Airplane';
import {ActionButton, Flex, Image} from '@adobe/react-spectrum'


function Myprofile() {
const [profile,setProfile]=useState([])
    function pro(){
        const profileSession=sessionStorage.getItem("profile");
setProfile(JSON.parse(profileSession)
)
    }
    return (
        <div><Airplane aria-label="Airplane" onClick={pro} cursor="pointer" />
        <Flex onClick={pro}> <label onClick={pro} htmlFor="image" >CLICK</label>
        <ActionButton onPress={pro} UNSAFE_className="image_one">
        <Image src="image.png" alt="Sky and roof"  width="100px" id="image" />
        </ActionButton>
</Flex>

           
            <div>
                {profile?.firstName?profile.firstName:"NA"}
            </div>
            <div>
                {profile?.lastName?profile.lastName:"NA"}
            </div>

            <div>
                {profile?.email?profile.email:"NA"}
            </div>
        </div>
    )
}

export default Myprofile

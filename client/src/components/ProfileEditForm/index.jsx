import {useState} from "react";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";
import "./styles.css";


// Edit Profile Form
export default function ProfileEditForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zodiacSign, setZodiacSign] = useState("");
    //Other unused profile fields, commented out incase we want to add later
    // const [pronouns, SetPronouns] = useState("");
    // const [age, setAge] = useState("");
    // const [bio, setBio] = useState("");
    // const [hobbies, setHobbies] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedUser = {
            firstName, 
            lastName, 
            zodiacSign,
            // Otherunused profile fields, commented out incase we want to add later
            // pronouns, 
            // age, 
            // bio, 
            // hobbies, 
            };
        let res = await userService.update(`${props.profile._id}`,updatedUser).then(() => {
            console.log(updatedUser);
            document.location = "/"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }

    const deleteSubmit = () => {
        userService.destroy(`${props.profile._id}`);
        authService.logout();
        window.location = "/"
    }

    const cancelClick = () => {
        window.location ="/"
    }

    return(
        <div className="profileEditFormComponent">
            <div> 
                <h2 className="headerEditProfile">Edit Your Profile, {props.profile.firstName} </h2>
            </div>
            <form className="profileEditForm">
                <label htmlFor="firtName">First Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="zodiacSign">Select Zodiac Sign</label>
                <select className="signUpForm-input" onChange={(e)=>setZodiacSign(e.target.value)}>
                    <option>- - -</option>
                    <option value="aries">♈ Aries (March 21 - April 19)</option>
                    <option value="taurus">♉ Taurus (April 20 - May 20)</option>
                    <option value="gemini">♊ Gemini (May 21 - June 20)</option>
                    <option value="cancer">♋ Cancer (June 21 - July 22)</option>
                    <option value="leo">♌ Leo (July 23 - August 22)</option>
                    <option value="virgo">♍ Virgo (August 23 - September 22)</option>
                    <option value="libra">♎ Libra (September 23 - October 22)</option>
                    <option value="scorpio">♏ Scorpio (October 23 - November 21)</option>
                    <option value="sagittarius">♏ Sagittarius (November 22 - December 21)</option>
                    <option value="capricorn">♑ Capricorn (December 22 - January 19)</option>
                    <option value="aquarius">♒ Aquarius (January 20 - February 18)</option>
                    <option value="pisces">♓ Pisces (February 19 - March 20)</option>
                </select>

                {/* <label htmlFor="pronouns">Pronouns</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> SetPronouns(e.target.value)}
                    value={pronouns}
                    type="text"
                    name="pronouns"
                    placeholder="Pronouns"
                />

                <label htmlFor="age">Age</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setAge(e.target.value)}
                    value={age}
                    type="text"
                    name="age"
                    placeholder="Age"
                />

                <label htmlFor="bio">Bio</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setBio(e.target.value)}
                    value={bio}
                    type="text"
                    name="bio"
                    placeholder="Bio"
                />

                <label htmlFor="hobbies">Hobbies</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setHobbies(e.target.value)}
                    value={hobbies}
                    type="text"
                    name="hobbies"
                    placeholder="Hobbies"
                /> */}

                <button className="profileUpd-btn"
                    onClick={handleSubmit}
                > Update
                </button>
            </form>

            <div className="profileEdit-btns">
                <button className="profileEdit-delete"
                    onClick={deleteSubmit}
                > Delete Account
                </button>
                <button className="profileEdit-cancel"
                    onClick={cancelClick}
                >Cancel
                </button>
            </div>
        </div>
    )
}
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FaCreditCard, FaEnvelope, FaLocationArrow, FaPhone, FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="w-full pt-36">
      <div className="w-5/12 mx-auto bg-zinc-900 p-5 rounded-md">
        <div className="flex">
          <div className="w-2/3">
            <h2 className="font-bold">Personal Info</h2>
            <div className="flex gap-2 items-center mt-4 mb-2">
              <FaUserCircle className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">Muhammad Azmi</h5>
                <p className="text-xs">Full name</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <FaEnvelope className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">muhmmdazmye@mail.com</h5>
                <p className="text-xs">Email</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <FaCreditCard className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">Active</h5>
                <p className="text-xs">Status</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <BsGenderAmbiguous className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">Male</h5>
                <p className="text-xs">Gender</p>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <FaPhone className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">0887481473</h5>
                <p className="text-xs">Mobile Phone</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationArrow className="text-2xl text-red-700" />
              <div>
                <h5 className="text-sm font-bold">JL. New Worlds</h5>
                <p className="text-xs">Address</p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img
              src={`https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
              alt=""
              className="w-full object-cover rounded-sm"
            />
            <button className="w-full mt-2 py-2 rounded-md bg-red-700 text-white">Change Photo Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

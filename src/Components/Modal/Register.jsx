const Register = (props) => {
  return (
    <div className={`${props.className}`}>
      <h2 className="font-semibold mb-5 text-2xl text-white">Register</h2>
      <form>
        <input type="email" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Email" />

        <input type="password" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Password" />

        <input type="text" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="FullName" />

        <select className="w-full mb-3 rounded-md p-1 placeholder-white text-white border-2 border-white bg-zinc-500 focus:outline-none">
          <option value="default" className="hidden">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input type="text" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Phone" />

        <textarea placeholder="Address" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"></textarea>

        <button className="w-full bg-white py-2 rounded-md mb-2 text-red-700 font-semibold">Register</button>

        <p className="text-sm text-center">
          Already have an account? click <span className="font-semibold cursor-pointer">Here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;

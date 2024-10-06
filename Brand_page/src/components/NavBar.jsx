export default function NavBar() {
  return (
    <div className="flex justify-between h-17">
      <div className='w-17 h-10.2 my-6 ml-9'>
        <img src={`/images/brand_logo.png`} />
      </div>

      <div className="flex justify-between w-80 my-6 ">
        <div>MENU</div>
        <div>LOCATION</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
      <button className="bg-red-600 text-white mr-9 my-7 rounded w-20 hover:bg-red-500">Login</button>
    </div>
  );
}

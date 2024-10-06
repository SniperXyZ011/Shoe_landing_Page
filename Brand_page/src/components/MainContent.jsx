
export default function MainComponent() {
  return (
    <div className='mx-40 mt-9' >
      <div className="flex mx-38 ">
        <div className="flex flex-col gap-y-7">
          <div className='text-7xl font-extrabold'>
            YOUR FEET <br /> DESERVES <br /> THE BEST
          </div>
          <div className='text-left'>
            YOUR FEET DESERVES THE BEST AND WE'RE HERE TO <br/> HELP YOU WITH OUR SHOES. WERE THE STYLE YOU DESIRE.
          </div>
          <div className='flex justify-between w-44'>
            <button className='bg-red-600 text-white p-1 rounded hover:bg-red-500'>Shop Now</button>
            <button className='border hover:bg-slate-200 border-black p-1 rounded'>Category</button>
          </div> 
          <div className='felx flex-col w-40 gap-y-1'>
            <p className='text-slate-500'>Also available on</p>
            <img src={`/images/shops.png`}/>
          </div>   
          

        </div>
        <div className='object-contain'>
             <img src={"/images/shoe_image.png"} />
        </div>
          
      </div>
    </div>
  );
}

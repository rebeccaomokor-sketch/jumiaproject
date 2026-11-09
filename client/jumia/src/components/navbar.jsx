function Navbar() {
   
    return (
        <>
            <nav>
                <div className="flex flex-row justify-center items-center bg-[#F1F1F2]">
                    <img src="https://ng.jumia.is/cms/0-0-black-friday/2026/brand-days/02-Nov--Xiaomi/DDB/BD-TOP-STRIP-BF26.gif" />
                </div>
                <div className="flex flex-row justify-between p-[10px_50px] bg-[#F1F1F2] ">
                    <div><p className="text-[#E07E1B] hover:transition-[0.5s_linear] hover:underline"> Sell on Jumia</p></div>
                    <div className="flex flex-row gap-10">
                        <p className="font-bold">JUMIA</p>
                        <p className="text-gray-300">PAY</p>
                        <p className="text-gra">DELIVERY</p>
                    </div>
                    <div></div>
                </div>
            </nav>
            <nav className="p-[15px_60px] flex flex-row justify-between items-center">
                <div className="logo">
                    <img src="https://companieslogo.com/img/orig/JMIA_BIG-4e420ed7.png?t=1720244492" />
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div className="bg-[#F1F1F2] flex flex-row items-center p-[5px_10px] rounded-[50px]">
                        <i className="bi-search"></i>
                        <input type="search" placeholder="Search Product, Brands and Categories" className="w-120 ml-4"/>
                        <button className="text-sm bg-[#FF9900] text-white rounded-[50px] w-18 h-10 hover:bg-[#E07E1B]">Search</button>
                    </div>
                    <p className="flex flex-row gap-3 items-center"><i className="bi-person"></i> Account <i className="bi-chevron-down"></i></p>
                    <p className="flex flex-row gap-3 items-center"><i className="bi-question-circle"></i>Help <i className="bi-chevron-down"></i></p>
                    <p className="flex flex-row gap-3 items-center"><i className="bi-cart3"></i>Cart </p>
                </div>
            </nav>

        </>
    )
}
export default Navbar;
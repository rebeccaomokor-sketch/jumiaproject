import Banner from "../components/homepageComponent/banner";

function Homepage() {
     const allIcons = [
        {
            text: "Official Store",
            icon: "bag-x-fill"
        },
         {
            text: "Appliances",
            icon: "bucket"
        },
         {
            text: "Phones and tablet",
            icon: "phone"
        },
         {
            text: "Health & Beauty",
            icon: "brush"
        },
         {
            text: "Home & Office",
            icon: "house-door"
        },
         {
            text: "Electronics",
            icon: "tv"
        },
         {
            text: "Fashion",
            icon: "instagram"
        },
        {
            text: "Supermarket",
            icon: "cart4"
        },
         {
            text: "Computer",
            icon: "laptop"
        },
    ]
    return (
        <>
          <section className="flex flex-row justify-between items-center p-[10px_40px]">
            {allIcons.map((each)=> {
                return <p className="flex items-center gap-1"><i className={`bi-${each.icon}`}></i> {each.text}</p>
            })}
          </section>
          <Banner />
          

        </>
    )
}

export default Homepage;
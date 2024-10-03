import Link from "next/link";

export default function CountryName({ params }: { params: { country_name: string } }) {
const { country_name } = params;
  const CountryDetails  = [
   {
    name: "Pakistan",
    population: 83884848,
    capital: "Islamabad",
  },
   {
    name: "China",
    population: 12121212,
    capital: "Beijing",
  },
   {
    name: "Bangladesh",
    population: 12121212,
    capital: "Dhaka",
  },
   {
    name: "Iran",
    population: 12121212,
    capital: "tehran",
  }
]

const country = CountryDetails.find((c) => c.name.toLowerCase() === country_name.toLowerCase());
if (!country) {
  return <div className="text-center text-3xl text-black py-8 px-14 m-auto mt-20 font-bold"> Country not found! </div>;
}

  return (
    <div className="w-1/2 max-[600px]:w-full h-max bg-black shadow-2xl py-8 px-14 m-auto mt-20 font-bold">
      <div className="text-2xl max-[600px]:text-lg py-2 text-center text-white ">Name : {country.name}</div>
      <div className="text-2xl max-[600px]:text-lg py-2 text-center text-white">Population : {country.population}</div>
      <div className="text-2xl max-[600px]:text-lg py-2 text-center text-white">Capital : {country.capital}</div>
 
      <button className="bg-white my-4 mx-auto px-4 py-1 block text-black hover:underline text-center">
        <Link href={"/country"}>Back to List </Link>{" "}
      </button>    </div>
  );
}


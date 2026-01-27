export default function Upcoming() {
  return (
    <div className="flex justify-center flex-col items-center p-5 md:p-8 border border-sage/50 rounded-lg mx-4 my-4 md:my-8">
      <p className="uppercase font-semibold text-slate tracking-widest text-xs mb-3">
        Next event
      </p>
      <h1 className="text-3xl font-light text-center text-darkGreen mb-1">
        Saturday, February 14th
      </h1>
      <h1 className="text-xl font-light text-slate">10 am - 1 pm</h1>
    </div>
  );
}
